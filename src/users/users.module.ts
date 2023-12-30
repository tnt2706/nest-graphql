import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { UserSchema } from './models/user.model';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   {
    //     name: 'User',
    //     schema: UserSchema,
    //   },
    // ]),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
