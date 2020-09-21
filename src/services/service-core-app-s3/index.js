const s3 = require("aws-sdk");
const { SERVICE_NAME } = require('./hooks');

const isTest = ['test'].includes(process.env.NODE_ENV);

const deleteFile = async (bucket, key, login, password) => {
    s3.config.update({
        accessKeyId: login,
        secretAccessKey: password
    });
    s3.config.region = 'eu-west-1';
    return new Promise((resolve, reject) => {
        var bucketInstance = new s3.S3();
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