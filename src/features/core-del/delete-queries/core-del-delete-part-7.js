const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 7>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM FlgSeddelLinie WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM FlgSeddel WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CorrectiveInvoice WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_8');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_7',
  handler,
};
