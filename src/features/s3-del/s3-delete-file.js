module.exports = (_, { getContext }) => [
    {
        queue: 's3_delete_file'
      handler: async (doc) => {
            const { coreappdb, s3 } = getContext();
            console.log('Delete s3 file>', doc.subject);
            try {
                const bucket
                const key

                const agId = doc.payload.agId;
                const setupId = doc.payload.setupId;
                await s3.deleteFile(bucket, key);
                await doc.forward('core_del_delete_part_1');
                return doc.complete();
            } catch (err) {
                console.log(err)
                return doc.reschedule('+1s');
            }
        },
    },
];