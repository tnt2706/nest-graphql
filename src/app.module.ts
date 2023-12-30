import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ConfigsModule } from './configs/configs.module';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
// import { DatabaseModule } from './dbs/database.module';
import { DirectivesModule } from './directives/directives.module';
import { ConstantsModule } from './constants/constants.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigsModule,
    UsersModule,
    CommonModule,
    DirectivesModule,
    ConstantsModule,
    // DatabaseModule,
  ],
})
export class AppModule {}
