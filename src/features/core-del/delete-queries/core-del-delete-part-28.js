const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 28>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM BankafstemningPostering WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_29');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_28',
  handler,
};