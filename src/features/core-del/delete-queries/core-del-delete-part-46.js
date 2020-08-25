const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 46>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM SupplierInvoicePayment WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CreditCardPayment WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CurrentCorrectiveInvoice WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CustomerPaymentServiceInfo WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ElectronicInvoiceFile WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM FakturaNemHandel WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM FakturaOIOXML WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM InvoiceAdditionalExpenseLine WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM InvoiceDeliveryAddressEstateInfo WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM InvoicePaymentLine WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_47');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_46',
  handler,
};
