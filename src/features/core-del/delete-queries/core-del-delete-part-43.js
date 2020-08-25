const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 43>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM TimetablePaymentTemplate WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM CustomerCreditCard WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PaymentRequestLine WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM DeductionEntry WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM DeductionRateEntry WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM EntryVatAmount WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ExternalKeyEntryMap WHERE Setup = ${setupId}`);
    await callNoResQuery(`DELETE FROM GainOrLossEntry WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM InvoiceDateEntry WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CustomerCreditCardDetails WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_44');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_43',
  handler,
};
