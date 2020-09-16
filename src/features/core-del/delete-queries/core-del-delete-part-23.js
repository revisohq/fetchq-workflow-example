module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_23'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 23>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM LagerVareLinie WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerVareLinieVariant WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AboProduktLinie WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_24');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
