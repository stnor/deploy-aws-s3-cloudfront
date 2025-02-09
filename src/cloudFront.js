const {CloudFrontClient} = require('@aws-sdk/client-cloudfront');

module.exports = () => new CloudFrontClient();
