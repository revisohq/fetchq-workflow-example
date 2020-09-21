module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_60',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 60>', doc.subject);
      try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM FileStorageData WHERE Id IN (SELECT DataId FROM FileStore WHERE DataId IS NOT NULL AND Opsaetning = ${setupId})`);
        await coreappdb.callNoResQuery(`DELETE FROM FileStore WHERE Opsaetning = ${agId}`);
        await doc.forward('core_del_finalize');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];

