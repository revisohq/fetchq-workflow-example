module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_46',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 46>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM SupplierInvoicePayment WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CreditCardPayment WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CurrentCorrectiveInvoice WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CustomerPaymentServiceInfo WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ElectronicInvoiceFile WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM FakturaNemHandel WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM FakturaOIOXML WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InvoiceAdditionalExpenseLine WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InvoiceDeliveryAddressEstateInfo WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InvoicePaymentLine WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_47');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
