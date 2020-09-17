module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_30'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 30>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAktivitetsOpgave WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAktivitet WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektUdlaegsBilag WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektBeloebsAktivitet WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektBeloebsAktivitetsGruppe WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektOmkontering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektHelligdag WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektKoersel WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektSaerPris WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_31');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
