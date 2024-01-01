import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { UserResponse } from './user.entity';

@Injectable()
export class UsersService {
  async getUser(id: string) {
    return {
      _id: id,
      firstName: id,
      createdAt: new Date(),
    };
  }

  async createUser(createUserInput: CreateUserInput): Promise<UserResponse> {
    const user = {
      ...createUserInput,
      _id: '100',
      roles: ['admin'],
      createdAt: new Date(),
    };

    return {
      isSuccess: true,
      user,
    };
  }
}
