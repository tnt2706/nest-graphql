"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    s3: {
        region: process.env.AWS_REGION || 'ap-southeast-1',
        shopBucket: process.env.S3_SHOP_BUCKET,
        shopBucketExpires: parseInt(process.env.SHOP_FILE_TOKEN_DURATION || '3600', 10),
    },
});
//# sourceMappingURL=aws.config.js.map