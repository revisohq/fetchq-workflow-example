const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 55>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM Lokation WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM NoteType WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM OpsaetningSetting WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PaymentFileExportSettings WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ScanDocLinkToInvoice WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ScanDocLinkToSupplierInvoice WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_56');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_55',
  handler,
};
