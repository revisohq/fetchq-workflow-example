const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 34>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM ProjektOpgaveStatus WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektOpgaveType WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektStatus WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektGruppe WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektSkabelon WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM AfgiftsKonto WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM BudgetTal WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM SpejlKode WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM BalancePostingFormulaLine WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM BalancePosting WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_35');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_34',
  handler,
};
