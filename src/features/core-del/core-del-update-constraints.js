module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_update_constraints',
    handler: async (doc) => {
      const { coreappdb } = getContext();

      console.log('Update constraints>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`UPDATE Debitor SET BetalingsBetingelse = NULL WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`UPDATE Kreditor SET BetalingsBetingelse = NULL WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`UPDATE Opsaetning SET SystemLogo = NULL WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`UPDATE FakturaLinieKladde SET OverfKladdeNr = NULL, OverfLinieNr = NULL WHERE Opsaetning = ${setupId}`);
        console.log("Forwarding");
        await doc.forward('s3_delete_file');
        return doc.complete();
      } catch (err) {
        console.log(err)
        return doc.reschedule('+1s');
      }
    },
  },
];
