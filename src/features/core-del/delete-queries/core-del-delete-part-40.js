const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 40>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM BilagsFil WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM BilagsTypeNy WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM FakturaLayoutElement WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM FakturaLayoutKolonne WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM FakturaLayout WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM FakturaLayoutGruppe WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM EmailRecipient WHERE EmailID IN (SELECT ID FROM Email WHERE Opsaetning = ${setupId})`);
    await coreappdb.callNoResQuery(`DELETE FROM Note WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_41');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_40',
  handler,
};
