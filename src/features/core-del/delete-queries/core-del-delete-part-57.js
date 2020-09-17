module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_57',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 57>', doc.subject);
      try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM VareSaerPrisValuta WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VatReport WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VatSettlement WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VoucherTemplate WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AdminAftale WHERE AdminAftale = ${agId} OR KlientAftale = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Administrator WHERE AftaleNr = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AdminMediaRepresentation WHERE AftaleNr = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AdminWebsiteInfo WHERE AftaleNr = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AgreementOwnership WHERE AgreementNo = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Api_Application WHERE Agreement = ${agId}`);
        await doc.forward('core_del_delete_part_58');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
