const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 44>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM DebitorVarenummer WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM LetterOfIntent WHERE SetupId = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM RykkerKladde WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM RykkerPosteringKladde WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM VatReportEntry WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM LagerReguleringsKladde WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ProjektAktivitetsOpgaveOmkostning WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ProjektUdlaeg WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM DeductionDraftEntry WHERE SetupId = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM DeductionRateDraftEntry WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_45');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_44',
  handler,
};
