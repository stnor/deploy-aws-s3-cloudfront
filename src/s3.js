const {S3Client} = require('@aws-sdk/client-s3');

module.exports = () => new S3Client();
