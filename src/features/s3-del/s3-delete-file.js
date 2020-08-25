const { callNoResQuery } = require('../core-del/db');
const { deleteFile } = require('./s3-client');

const handler = async doc => {
    console.log('Delete s3 file>', doc.subject);
    try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await deleteFile();
        await doc.forward('core_del_delete_part_1');
        return doc.complete();
    } catch (err) {
        console.log(err)
        return doc.reschedule('+1s');
    }
};

module.exports = {
    queue: 's3_delete_file',
    handler,
};
