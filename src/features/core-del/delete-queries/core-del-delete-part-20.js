module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_20'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 20>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM FakturaLinie WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_21');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
