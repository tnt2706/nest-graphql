"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const default_1 = require("@apollo/server/plugin/landingPage/default");
const configs_module_1 = require("./configs/configs.module");
const users_module_1 = require("./users/users.module");
const common_module_1 = require("./common/common.module");
const directives_module_1 = require("./directives/directives.module");
const constants_module_1 = require("./constants/constants.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: false,
                typePaths: ['./**/*.graphql'],
                definitions: {
                    path: (0, path_1.join)(process.cwd(), 'src/graphql.schema.ts'),
                    outputAs: 'class',
                },
                plugins: [(0, default_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            configs_module_1.ConfigsModule,
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            directives_module_1.DirectivesModule,
            constants_module_1.ConstantsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map