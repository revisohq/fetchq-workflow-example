const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 42>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM dbo.Api_Grant WHERE Agreement = ${agId}`);
    await callNoResQuery(`DELETE FROM PopupMessageSystemShowMessage WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM RapportOpsaetning WHERE Aftalenr = ${agId}`);
    await callNoResQuery(`DELETE FROM BrugerFormIndstilling WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM BrugerMenuPunkt WHERE AftaleNr = ${agId}`);
    await callNoResQuery(`DELETE FROM Bruger WHERE Aftalenr = ${agId}`);
    await callNoResQuery(`DELETE FROM Virksomhed WHERE Aftalenr = ${agId}`);
    await callNoResQuery(`DELETE FROM TimetablePaymentTemplateLine WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM PaymentRequestExportLine WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM PeriodiseringsKladde WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_43');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_42',
  handler,
};
