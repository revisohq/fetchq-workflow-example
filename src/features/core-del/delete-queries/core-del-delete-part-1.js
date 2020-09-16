module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_1',
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 1>', doc.subject);
      try {
        const agId = doc.payload.agId;
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM UserTabOrder WHERE AgreementNumber = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM DayBookUserSetup WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM UserTabOrderList WHERE AgreementNumber = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM VatReportEntry WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM NumberSeries WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM PaymentManagementRateMatch WHERE SetupId = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BenyttetModulAftaleNr WHERE Aftalenr = ${agId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BenyttetModulBruger WHERE Aftalenr = ${agId}`);
        await doc.forward('core_del_delete_part_2');
        return doc.complete();
      } catch (err) {
        console.log(err)
        return doc.reschedule('+1s');
      }
    },
  },
];

