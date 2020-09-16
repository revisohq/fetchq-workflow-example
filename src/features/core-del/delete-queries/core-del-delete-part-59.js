const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 59>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM Opsaetning WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM Aftalenr WHERE AftaleNr = ${agId}`);
    await doc.forward('core_del_finalize');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_59',
  handler,
};
