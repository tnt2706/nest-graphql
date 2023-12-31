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
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
          // onConnect: (context: Context<any>) => {
          //   const { connectionParams, extra } = context;
          //   // user validation will remain the same as in the example above
          //   // when using with graphql-ws, additional context value should be stored in the extra field
          //   extra.user = { user: {} };
          // },
        },
      },
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
