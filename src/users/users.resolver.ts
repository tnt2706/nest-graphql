import { Args, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { User } from '../graphql.schema';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => User)
  async user(@Args('_id', { type: () => String }) id: string): Promise<User> {
    return {
      firstName: id,
    };
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
