const { SERVICE_NAME } = require('./hooks');

const isTest = ['test'].includes(process.env.NODE_ENV);

const deleteFile = async (bucket, key, login, password) => {
    return 1
}

module.exports = ({ registerHook, registerAction, getConfig, setContext }) => {
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('s3', { deleteFile }),
    });
};