const { callNoResQuery } = require('../db');

const handler = async doc => {
  console.log('Delete part 50>', doc.subject);
  try {
    const agId = doc.payload.agId;
    const setupId = doc.payload.setupId;
    await callNoResQuery(`DELETE FROM VatReportSettled WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM ArdCompanyGroup WHERE AdminAgreement = ${agId}`);
    await callNoResQuery(`DELETE FROM ArdDepartmentInterval WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM ArdPeriod WHERE SetupId = ${setupId}`);
    await callNoResQuery(`DELETE FROM Api_ApplicationForAgreement WHERE AgreementNumber = ${agId}`);
    await callNoResQuery(`DELETE FROM Api_ApplicationRole WHERE ApplicationId IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await callNoResQuery(`DELETE FROM Api_EmbeddedAppMenuDefinition WHERE ApplicationId IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await callNoResQuery(`DELETE FROM Api_EmbeddedAppToken WHERE AppId IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await callNoResQuery(`DELETE FROM Api_EmbeddedForm WHERE ApplicationId IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await callNoResQuery(`DELETE FROM Api_Grant WHERE AppId IN (SELECT Id FROM Api_Application WHERE Agreement = ${agId})`);
    await doc.forward('core_del_delete_part_51');
    return doc.complete();
  } catch (err) {
    return doc.reschedule('+1s');
  }
};

module.exports = {
  queue: 'core_del_delete_part_50',
  handler,
};
