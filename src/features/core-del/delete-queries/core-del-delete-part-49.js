const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 49>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM ExternalKeyCashbookEntryMap WHERE Setup = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ExternalKeyEntryMap WHERE Setup = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ArdRapportClosingSheetData WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM PosteringKladdeR2 WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ElsterExport WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM Rentenota WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM PBSExportNumberseries WHERE SetupId = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM UnbrokenNumberSeriesSequenceElement WHERE SetupId = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM VatReportItalySummaryUserInput WHERE SetupId = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM VatReportRoundingEntry WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_50');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_49',
  handler,
};
