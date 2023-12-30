import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UserSchema } from './models/user.model';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    // MongooseModule.forFeature([
    //   {
    //     name: 'User',
    //     schema: UserSchema,
    //   },
    // ]),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
