const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 58>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM CountryFieldOrder WHERE AgreementNumber = ${agId}`);
    await callNoResQuery(`DELETE FROM DayBookUserSetup WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM GermanPaymentService WHERE Aftalenr = ${agId}`);
    await callNoResQuery(`DELETE FROM TsStoreSubscriptions WHERE AgreementNumber = ${agId}`);
    await doc.forward('core_del_delete_part_59');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_58',
  handler,
};
