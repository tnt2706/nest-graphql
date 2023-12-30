"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const core_1 = require("@nestjs/core");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log'],
    });
    app.use(compression());
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API example')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const PORT = app.get(config_1.ConfigService).get('port');
    await app.listen(PORT, () => console.log(`🚀 Running on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map