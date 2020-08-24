const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 9>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM VareSamling WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_10');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_9',
  handler,
};
