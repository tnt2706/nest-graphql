import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

import { GraphQLDate, GraphQLDateTime } from 'graphql-scalars';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';

import { reqContext } from './common/context';
import { ConfigsModule } from './configs/configs.module';
import { ApiModule } from '@api/api.module';
// import { DatabaseModule } from './dbs/database.module';
import { ConstantsModule } from './constants/constants.module';

import { UpperDirective, AuthDirective } from '@api/directives';
import { BaseModule } from '@base/base.module';

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
        'graphql-ws': true,
      },

      context: (ctx) => {
        return reqContext(ctx);
      },

      resolvers: {
        Date: GraphQLDate,
        // JSON: GraphQLJSON,
        // JSONObject: GraphQLJSONObject,
      },

      transformSchema: (schema) => AuthDirective(schema, 'auth'),
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'auth',
            locations: [
              DirectiveLocation.FIELD_DEFINITION,
              // DirectiveLocation.OBJECT,
            ],
          }),
        ],
      },
      // transformSchema: (schema) => UpperDirective(schema, 'upper'),
      // buildSchemaOptions: {
      //   directives: [
      //     new GraphQLDirective({
      //       name: 'upper',
      //       locations: [DirectiveLocation.FIELD_DEFINITION],
      //     }),
      //   ],
      // },
    }),
    ConfigsModule,
    ConstantsModule,
    ApiModule,
    BaseModule,
    // DatabaseModule,
  ],
})
export class AppModule {}
