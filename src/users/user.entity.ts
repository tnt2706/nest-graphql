import { Field, ObjectType } from '@nestjs/graphql';

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
