const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 56>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM UnbrokenNumberSeries WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_57');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_56',
  handler,
};
