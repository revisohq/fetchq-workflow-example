module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_45'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 45>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM DraftGainOrLossEntry WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ExternalKeyCashbookEntryMap WHERE Setup = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InternationalLedgerDraftEntry WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InvoiceDateDraftEntry WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PosteringKladdeAktivering WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM EconInvoiceLinePeriod WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM InvoiceLineInventoryData WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdRapportClosingSheet WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM ArdRapportClosingSheetData WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PosteringKladdeAktiveringR2 WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_46');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
