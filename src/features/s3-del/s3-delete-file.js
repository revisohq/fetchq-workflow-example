module.exports = (_, { getContext }) => [
    {
        queue: 's3_delete_file',
        handler: async (doc) => {
            const { coreappdb, s3 } = getContext();
            console.log('Delete s3 file>', doc.subject);
            try {
                const setupId = doc.payload.setupId;
                arrayOfFileInfos = await coreappdb.callQuery(`SELECT ProviderSetting AS Bucket, DataKey AS 'Key', Username, Password 
                    FROM FileStore fs 
                    LEFT JOIN FileStorageData fsd 
                    ON fs.DataId = fsd.Id 
                    LEFT JOIN FileStorageProvider fsp 
                    ON fsd.StorageId = fsp.Id 
                    WHERE Opsaetning = ${setupId} 
                    AND fs.DataId IS NOT NULL`);
                arrayOfFileInfos.forEach(async (element) => {
                    console.log('Bucket: ', element.Bucket);
                    console.log('Key: ', element.Key);
                    console.log('Username: ', element.Username);
                    console.log('Password: ', element.Password);
                    await s3.deleteFile(element.Bucket, element.Key, element.Username, element.Password);  //<--Do not run
                });

                await doc.forward('core_del_finalize');
                return doc.complete();
            } catch (err) {
                console.log(err)
                return doc.reschedule('+1s');
            }
        },
    },
];