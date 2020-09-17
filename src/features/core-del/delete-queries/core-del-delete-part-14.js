module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_14',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 14>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM InternationalLedgerEntry WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DirectlyPostedVatEntry WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PurchaseVatDeductionEntry WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PosteringAktivering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM Aktivering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM AssetPostering WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_15');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
