module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_12',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 12>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM Rykker WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM GenerelFakturaLinie WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM GenerelFaktura WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Kontaktperson WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DraftEntry WHERE SetupId = ${setupId}`);
        await doc.forward('core_del_delete_part_13');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
