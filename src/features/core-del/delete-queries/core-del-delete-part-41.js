module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_41'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 41>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM BogfoeringsJournal WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_42');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
