const {S3Client} = require('@aws-sdk/client-s3');

module.exports = () => new S3Client({
    requestHandler: {
        requestTimeout: 3_000,
        httpsAgent: { maxSockets: 100 },
    }
});
