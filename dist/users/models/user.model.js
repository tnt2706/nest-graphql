"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        maxLength: 150,
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 150,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    verify: {
        type: mongoose_1.Schema.Types.Boolean,
        default: false,
    },
    roles: {
        type: [String],
        default: [],
    },
}, {
    timestamps: true,
});
exports.UserSchema = UserSchema;
//# sourceMappingURL=user.model.js.map