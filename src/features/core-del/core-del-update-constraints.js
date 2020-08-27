const { callNoResQuery } = require('./db');

const handler = async doc => {
  console.log('Update constraints>', doc.subject);
  try {
    const setupId = doc.payload.setupId;
    await callNoResQuery(`UPDATE Debitor SET BetalingsBetingelse = NULL WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`UPDATE Kreditor SET BetalingsBetingelse = NULL WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`UPDATE Opsaetning SET SystemLogo = NULL WHERE Opsaetning = ${setupId}`);
    await callNoResQuery(`UPDATE FakturaLinieKladde SET OverfKladdeNr = NULL, OverfLinieNr = NULL WHERE Opsaetning = ${setupId}`);
    console.log("Forwarding");
    await doc.forward('s3_delete_file');
    return doc.complete();
  } catch (err) {
    console.log(err)
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_update_constraints',
  handler,
};
