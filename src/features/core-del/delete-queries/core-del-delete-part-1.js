const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 1>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM UserTabOrder WHERE AgreementNumber = ${agId}`);
    await callNoResQuery(`DELETE FROM DayBookUserSetup WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM UserTabOrderList WHERE AgreementNumber = ${agId}`);
    await callNoResQuery(`DELETE FROM VatReportEntry WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM NumberSeries WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PaymentManagementRateMatch WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM BenyttetModulAftaleNr WHERE Aftalenr = ${agId}`);
    await callNoResQuery(`DELETE FROM BenyttetModulBruger WHERE Aftalenr = ${agId}`);
    await doc.forward('core_del_delete_part_2');
    return doc.complete();
  } catch (err) {
    console.log(err)
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_1',
  handler,
};
