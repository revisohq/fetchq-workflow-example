const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 19>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM SproglagVare WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM VareSenesteKostpris WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM LeverandoerNummer WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM Kreditor WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM SprogLag WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM VareSaerPris WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM PrisGruppe WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM VatMatrix WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM FakLinieRestKostpris WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_20');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_19',
  handler,
};
