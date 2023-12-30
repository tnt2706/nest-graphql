"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    NODE_ENV: process.env.NODE_ENV,
    hostName: process.env.HOSTNAME || 'nest-graphql',
    port: parseInt(process.env.PORT || '4000', 10),
    NAMESPACE: process.env.NAMESPACE || 'dev',
});
//# sourceMappingURL=container.config.js.map