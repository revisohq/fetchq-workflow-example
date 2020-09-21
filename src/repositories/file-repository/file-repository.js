const { SERVICE_NAME, ...hooks } = require('./hooks');

module.exports = ({ registerHook, registerAction, getConfig, setContext, getContext }) => {
    //registerHook(hooks);
    //console.log('hooks ', hooks)
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('fileRepository', {
            getArrayOfFileInfos: async (setupId) => {
                console.log('setupId:', setupId);
                const { coreappdb } = getContext();
                console.log('coreappdb ', coreappdb);
                var res = await coreappdb.callQuery(
                    `SELECT ProviderSetting AS Bucket, DataKey AS 'Key', Username, Password 
                FROM FileStore fs 
                LEFT JOIN FileStorageData fsd 
                ON fs.DataId = fsd.Id 
                LEFT JOIN FileStorageProvider fsp 
                ON fsd.StorageId = fsp.Id 
                WHERE Opsaetning = ${setupId} 
                AND fs.DataId IS NOT NULL`);
                console.log('res:', res);
                if (!Array.isArray(res)) {
                    throw 'No valid data obtained from db';
                } else {
                    return res;
                }
            }
        }),
    });
};

