const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 41>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM BogfoeringsJournal WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_42');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_41',
  handler,
};
