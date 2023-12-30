
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class UserFilterInput {
    searchName?: Nullable<string>;
    sortOrder?: Nullable<string>;
    sortField?: Nullable<string>;
}

export class CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    age?: Nullable<number>;
    roles?: Nullable<Nullable<string>[]>;
}

export class User {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    age?: Nullable<number>;
    roles?: Nullable<Nullable<string>[]>;
}

export class UserResponse {
    isSuccess: boolean;
    message?: Nullable<string>;
    user?: Nullable<User>;
}

export abstract class IQuery {
    abstract user(_id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;

    abstract users(filter: UserFilterInput): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
