const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 20>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM FakturaLinie WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_aaa');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_20',
  handler,
};
