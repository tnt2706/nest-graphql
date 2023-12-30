"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const db_config_1 = require("./db.config");
const aws_config_1 = require("./aws.config");
const container_config_1 = require("./container.config");
const cloudinary_config_1 = require("./cloudinary.config");
const grpc_config_1 = require("./grpc.config");
let ConfigsModule = class ConfigsModule {
};
exports.ConfigsModule = ConfigsModule;
exports.ConfigsModule = ConfigsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [aws_config_1.default, db_config_1.default, container_config_1.default, cloudinary_config_1.default, grpc_config_1.default],
                envFilePath: ['.env.dev', '.env.production'],
            }),
        ],
    })
], ConfigsModule);
//# sourceMappingURL=configs.module.js.map