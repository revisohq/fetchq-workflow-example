const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 29>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM BankafstemningPosteringInfo WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM BankafstemningIndstillinger WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM AboProdukt WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektKlientKonto WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektAfspadseringsPuljePrimoRegulering WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektAfspadseringsPuljePrimo WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektRegistrering WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektRegistreringsInterval WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`DELETE FROM ProjektAktivitetsOpgaveMedarbejder WHERE Opsaetning = ${setupId}`);
    await doc.forward('core_del_delete_part_30');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_29',
  handler,
};
