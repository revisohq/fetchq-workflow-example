const { callNoResQuery } = require('./db');

const handler = async doc => {
  console.log('UserTabOrder>', doc.subject);
  try {
    const agId = doc.payload.agId;
    await callNoResQuery(`DELETE FROM UserTabOrder WHERE AgreementNumber = ${agId}`);
    await doc.forward('core_del_aaa');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_UserTabOrder',
  handler,
};
