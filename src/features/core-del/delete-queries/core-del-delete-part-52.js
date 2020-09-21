module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_52',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 52>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM DeductionRequestNumbersSeries WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DefaultSetupSettings WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ElsterExportXML WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_53');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
