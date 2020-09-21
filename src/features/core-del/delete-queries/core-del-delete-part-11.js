module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_11',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 11>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM FakturaKladde WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_12');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
