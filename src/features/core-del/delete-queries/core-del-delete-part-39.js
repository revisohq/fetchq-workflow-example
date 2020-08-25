const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 39>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM BilagsBillede WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_40');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_39',
  handler,
};
