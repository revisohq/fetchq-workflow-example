module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_47'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 47>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM InvoiceWithDeduction WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM NotFullyRefundedRotRutInvoiceDraftMatching WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM NotFullyRefundedRotRutInvoiceMatching WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DraftInvoiceAdditionalExpenseLine WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DraftInvoiceDeliveryAddressEstateInfo WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DraftInvoiceDeliveryDetails WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DraftInvoicePaymentLine WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM SalesDocumentLock WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerVareSerieNummer WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM EconInvoiceBulkProduct WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_48');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
