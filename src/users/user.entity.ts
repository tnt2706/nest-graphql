import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLDate } from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  verify?: string;

  @Field(() => [String])
  roles?: string[];

  @Field(() => GraphQLDate)
  createdAt: Date;
}

@ObjectType()
export class UserResponse {
  @Field(() => Boolean)
  isSuccess: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}
