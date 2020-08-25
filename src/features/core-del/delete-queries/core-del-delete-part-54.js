const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 54>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM FakturaLayoutBillede WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM finance_NumberSeries WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM FordelingsSkabelon WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ImportStockAdjustments WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LicensModulVare WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_55');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_54',
  handler,
};
