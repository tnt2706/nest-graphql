import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { User, UserResponse } from './user.entity';
import { UsersService } from './users.service';
import { CreateUserInput } from './inputs/create-user.input';

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('_id', { type: () => String }) id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<UserResponse> {
    const user = await this.userService.createUser(createUserInput);
    pubSub.publish('USER_CREATED', { userCreated: user.user });

    return user;
  }

  @Subscription(() => User)
  userCreated() {
    return pubSub.asyncIterator('USER_CREATED');
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
