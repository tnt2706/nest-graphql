export declare class UserFilterInput {
    searchName?: Nullable<string>;
    sortOrder?: Nullable<string>;
    sortField?: Nullable<string>;
}
export declare class CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    age?: Nullable<number>;
    roles?: Nullable<Nullable<string>[]>;
}
export declare class UserResponse {
    isSuccess: boolean;
    message?: Nullable<string>;
    user?: Nullable<User>;
}
export declare abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IQuery {
    abstract user(_id?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    abstract users(filter: UserFilterInput): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}
export declare class User {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    age?: Nullable<number>;
    roles?: Nullable<Nullable<string>[]>;
}
type Nullable<T> = T | null;
export {};
