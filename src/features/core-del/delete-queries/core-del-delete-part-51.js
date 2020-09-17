module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_51',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 51>', doc.subject);
      try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM Company_CustomField WHERE Agreement = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ExternalKey WHERE ApplicationId  IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdCompanyReports WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdDepartmentInterval WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdPeriod WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BankEntryTransferData WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Besked WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CorrectiveInvoiceLine WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CreditCardRecipientDetails WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CurrentCorrectiveInvoiceLine WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_52');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
