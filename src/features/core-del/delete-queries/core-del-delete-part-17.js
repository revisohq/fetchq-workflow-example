module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_17',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 17>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM AboProduktDebitor WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LeveringsSted WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PaymentRequest WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VoucherHeader WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BetalingsBetingelse WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_18');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
