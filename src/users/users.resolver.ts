import {
  Args,
  Context,
  Info,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { createSelectedFields } from 'graphql-fields-projection-v2';

import { User, UserResponse } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './inputs/create-user.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('_id', { type: () => String }) id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Info() info: any,
    @Context('pubsub') pubsub: PubSub,
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserResponse> {
    const selectedFields = createSelectedFields(info, { path: 'user' });

    const user = await this.userService.createUser(createUserInput);
    pubsub.publish('USER_CREATED', { userCreated: user.user });

    return user;
  }

  @Subscription(() => User, {
    filter(payload, variables) {
      return true;
    },
  })
  userCreated(@Context() ctx) {
    return ctx.pubsub.asyncIterator('USER_CREATED');
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
