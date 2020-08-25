const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 51>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM Company_CustomField WHERE Agreement = ${agId}`);
    await callNoResQuery(`DELETE FROM ExternalKey WHERE ApplicationId  IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await callNoResQuery(`DELETE FROM ArdCompanyReports WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM ArdDepartmentInterval WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM ArdPeriod WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM BankEntryTransferData WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM Besked WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CorrectiveInvoiceLine WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CreditCardRecipientDetails WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM CurrentCorrectiveInvoiceLine WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_52');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_51',
  handler,
};
