const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 57>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM VareSaerPrisValuta WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM VatReport WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM VatSettlement WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM VoucherTemplate WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM AdminAftale WHERE AdminAftale = ${agId} OR KlientAftale = ${agId}`);
    await callNoResQuery(`DELETE FROM Administrator WHERE AftaleNr = ${agId}`);
    await callNoResQuery(`DELETE FROM AdminMediaRepresentation WHERE AftaleNr = ${agId}`);
    await callNoResQuery(`DELETE FROM AdminWebsiteInfo WHERE AftaleNr = ${agId}`);
    await callNoResQuery(`DELETE FROM AgreementOwnership WHERE AgreementNo = ${agId}`);
    await callNoResQuery(`DELETE FROM Api_Application WHERE Agreement = ${agId}`);
    await doc.forward('core_del_delete_part_58');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_57',
  handler,
};
