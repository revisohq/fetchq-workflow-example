module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_3',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 3>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM KladdeAnvendelse WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerFlytLinie WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerFlytning WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerReguleringLinie WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerRegulering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerRegKladdeOpsaetning WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM dbo.SupplierInvoicePayment WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM SupplierJournalProductEntry WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Enhed WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_4');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
