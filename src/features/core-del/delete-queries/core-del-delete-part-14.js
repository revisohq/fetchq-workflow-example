const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 14>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM InternationalLedgerEntry WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM DirectlyPostedVatEntry WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PurchaseVatDeductionEntry WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM PosteringAktivering WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM Aktivering WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM AssetPostering WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_15');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_14',
  handler,
};
