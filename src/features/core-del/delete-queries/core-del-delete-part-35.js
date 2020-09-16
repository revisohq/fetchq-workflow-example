const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 35>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM KontoInterval WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM PeriodiseringsKontoInterval WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM PosteringBetalingsKonto WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM BeholdningsKonto WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM DebitorGruppe WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM KladdeOpsaetning WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM KreditorGruppe WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM SystemKonto WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM DistributionTemplateRow WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM AdditionalExpense WHERE SetupId = ${setupId}`);
    await doc.forward('core_del_delete_part_36');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_35',
  handler,
};
