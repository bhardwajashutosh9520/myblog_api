const AWS = require('aws-sdk');
const mime = require('mime-types');
const uuid = require('uuid');

class FileService {
  static async getPreSignedUrl(DIRECTORY, fileName) {
    console.log('come in');

    /* Create aws instance */
    let s3;
    if (
      process.env.NODE_ENV !== 'development' &&
      process.env.NODE_ENV !== 'testing'
    ) {
      s3 = new AWS.S3({
        region: process.env.AWS_REGION,
      });
    } else {
      s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
        signatureVersion: 'v4',
      });
    }
    const extension = fileName.split('.').pop();
    const name = `${uuid.v4()}.${extension}`;
    /* MIME type */
    let contentType = mime.lookup(fileName);
    if (extension === 'jfif') {
      contentType = 'image/jfif';
    }

    var params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${DIRECTORY}/${name}`,
      Expires: 8600,
      ContentType: contentType,
      ACL: 'public-read',
    };

    const uploadURL = await s3.getSignedUrlPromise('putObject', params);
    console.log('uploadURL------', uploadURL);
    return uploadURL;
  }
}

module.exports = FileService;
