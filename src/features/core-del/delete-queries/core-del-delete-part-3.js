const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 3>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM KladdeAnvendelse WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerFlytLinie WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerFlytning WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerReguleringLinie WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerRegulering WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerRegKladdeOpsaetning WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM dbo.SupplierInvoicePayment WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM SupplierJournalProductEntry WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM Enhed WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_4');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_3',
  handler,
};
