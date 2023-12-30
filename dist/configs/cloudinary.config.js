"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'shopeco',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: process.env.CLOUDINARY_SECURE || true,
});
//# sourceMappingURL=cloudinary.config.js.map