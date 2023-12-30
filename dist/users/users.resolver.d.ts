import { User } from '../graphql.schema';
export declare class UsersResolver {
    user(id: string): Promise<User>;
}
