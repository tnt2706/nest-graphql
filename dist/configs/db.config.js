"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    mongo: {
        database: process.env.DB_CONNECT_STRING || 'mongodb://localhost/shopDev3',
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        },
    },
});
//# sourceMappingURL=db.config.js.map