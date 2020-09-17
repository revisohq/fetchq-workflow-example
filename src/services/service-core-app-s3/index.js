const s3 = require("aws-sdk");
const { SERVICE_NAME } = require('./hooks');

const isTest = ['test'].includes(process.env.NODE_ENV);


AWS.config.update({
    accessKeyId: 'YOUR_ACCESS_KEY',
    secretAccessKey: 'YOUR_SECRET_KEY'
});

AWS.config.region = 'REGION';

const deleteFile = (bucket, key) => {
    return new Promise((resolve, reject) => {
        var bucketInstance = new AWS.S3();
        var params = {
            Bucket: bucket,
            Key: key
        };
        bucketInstance.deleteObject(params, function (err, data) {
            if (data) {
                console.log("File deleted successfully");
            }
            else {
                console.log("Check if you have sufficient permissions : " + err);
            }
        });
    });
}

module.exports = ({ registerHook, registerAction, getConfig, setContext }) => {
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('s3', { deleteFile }),
    });
};