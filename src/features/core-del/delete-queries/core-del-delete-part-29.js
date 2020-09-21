module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_29',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 29>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM BankafstemningPosteringInfo WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BankafstemningIndstillinger WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AboProdukt WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektKlientKonto WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAfspadseringsPuljePrimoRegulering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAfspadseringsPuljePrimo WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektRegistrering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektRegistreringsInterval WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAktivitetsOpgaveMedarbejder WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_30');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
