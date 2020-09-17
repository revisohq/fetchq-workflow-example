module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_37'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 37>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM Konto WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_38');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
