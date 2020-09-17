module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_48'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 48>', doc.subject);
      try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM LagerFlytKladde WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LagerStatusKostpris WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM LicenseModuleLegacyPrice WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PakkeLoesningVare WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektAktivitetsOpgaveVare WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ProjektRegistreringVare WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VarePrisValuta WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdCompany WHERE AgreementNumber = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdCompanyReports WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdSkabelon WHERE Aftalenr = ${agId}`);
        await doc.forward('core_del_delete_part_49');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
