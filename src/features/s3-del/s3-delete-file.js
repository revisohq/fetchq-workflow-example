module.exports = (_, { getContext }) => [
    {
        queue: 's3_delete_file',
        handler: async (doc) => {
            const { s3, fileRepository } = getContext();
            console.log('Delete s3 file>', doc.subject);
            try {
                const setupId = doc.payload.setupId;
                arrayOfFileInfos = await fileRepository.getArrayOfFileInfos(setupId);
                // arrayOfFileInfos = await coreappdb.callQuery(
                //     `SELECT ProviderSetting AS Bucket, DataKey AS 'Key', Username, Password 
                //     FROM FileStore fs 
                //     LEFT JOIN FileStorageData fsd 
                //     ON fs.DataId = fsd.Id 
                //     LEFT JOIN FileStorageProvider fsp 
                //     ON fsd.StorageId = fsp.Id 
                //     WHERE Opsaetning = ${setupId} 
                //     AND fs.DataId IS NOT NULL`);
                arrayOfFileInfos.forEach(async (element) => {
                    console.log('Bucket: ', element.Bucket);
                    console.log('Key: ', element.Key);
                    console.log('Username: ', element.Username);
                    console.log('Password: ', element.Password);

                    // put some validation

                    // Deletes from s3, make sure when testing you run local agreement 
                    // otherwise if the agreement is streamed from production the files 
                    // are also deleted from production the way they are defined in DB
                    // This depends on in which environment file has been uploaded and 
                    // then defined in DB as development environment or production.
                    //await s3.deleteFile(element.Bucket, element.Key, element.Username, element.Password);
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