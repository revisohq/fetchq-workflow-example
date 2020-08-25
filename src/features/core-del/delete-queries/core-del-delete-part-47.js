const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 47>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM InvoiceWithDeduction WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM NotFullyRefundedRotRutInvoiceDraftMatching WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM NotFullyRefundedRotRutInvoiceMatching WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM DraftInvoiceAdditionalExpenseLine WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM DraftInvoiceDeliveryAddressEstateInfo WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM DraftInvoiceDeliveryDetails WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM DraftInvoicePaymentLine WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM SalesDocumentLock WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM LagerVareSerieNummer WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM EconInvoiceBulkProduct WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_48');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_47',
  handler,
};
