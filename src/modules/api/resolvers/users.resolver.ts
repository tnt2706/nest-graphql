import {
  Args,
  Context,
  Info,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { createSelectedFields } from 'graphql-fields-projection-v2';

import { User, UserResponse } from '@api/entities';
import { UsersService } from '@api/services';
import { CreateUserInput } from '@api/dto';
import { Roles } from '@api/decorators';
import { Role } from '@api/enums';
import { RolesGuard } from '@api/guards';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User)
  async user(@Args('_id', { type: () => String }) id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @UseGuards(RolesGuard)
  @Mutation(() => UserResponse)
  @Roles(Role.Admin, Role.User)
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
