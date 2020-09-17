module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_7',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM FlgSeddelLinie WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM FlgSeddel WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM CorrectiveInvoice WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_8');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];