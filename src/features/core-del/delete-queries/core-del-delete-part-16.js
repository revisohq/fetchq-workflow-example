module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_16'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 16>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM PosteringKladde WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_17');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
