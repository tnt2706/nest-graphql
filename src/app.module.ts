import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { ConfigsModule } from './configs/configs.module';
import { UsersModule } from './users/users.module';

// import { DatabaseModule } from './dbs/database.module';
import { ConstantsModule } from './constants/constants.module';
import { reqContext } from './common/context';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      typePaths: ['./**/*.graphql'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
          onConnect: (context) => {
            console.log('Client connected');
          },

          onDisconnect: () => {
            console.log('Client diConnected');
          },
        },
      },

      context: (ctx) => {
        return reqContext(ctx);
      },
    }),
    ConfigsModule,
    UsersModule,
    ConstantsModule,
    // DatabaseModule,
  ],
})
export class AppModule {}
