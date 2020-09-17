module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_38'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 38>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM FordelingsNoegleAfdeling WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM FordelingsNoegle WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Afdeling WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Periode WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM UnbrokenNumberSeriesIdMapper WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM RegnskabsAar WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DocumentLine WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_39');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
