const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 32>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await coreappdb.callNoResQuery(`DELETE FROM ProjektMedarbejderGruppe WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ProjektTidsAktivitet WHERE Opsaetning = ${setupId}`);
    await coreappdb.callNoResQuery(`DELETE FROM ProjektTidsAktivitetsGruppe WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_33');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_32',
  handler,
};
