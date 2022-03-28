const AWS = require('aws-sdk')
const dotenv = require('dotenv')
dotenv.config()

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: "us-east-1",
    signatureVersion: "v4",
})

const s3 = new AWS.S3()

const uploadFile = (buffer, name, type, bucket) => {
    const params = {
      ACL: 'private',
      Body: buffer,
      Bucket: bucket,
      ContentType:  `application/pdf`,
      Key: `${name}.${type}`,
    };
    return s3.upload(params).promise();
  };

const signFile = (bucket, key, expires) => {
  const signedUrl = s3.getSignedUrl('getObject', {
    Key: key,
    Bucket: bucket,
    Expires: expires || 900
  })

  return signedUrl
}

module.exports = {uploadFile, signFile}