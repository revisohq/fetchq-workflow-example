const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 17>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM AboProduktDebitor WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LeveringsSted WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PaymentRequest WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM VoucherHeader WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM BetalingsBetingelse WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_18');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_17',
  handler,
};
