module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_delete_part_27'
    handler: async (doc) => {
      const { coreappdb } = getContext();
      console.log('Delete part 27>', doc.subject);
      try {
        const setupId = doc.payload.setupId;
        await coreappdb.callNoResQuery(`DELETE FROM PosteringKladdeUdligning WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BankafstemningAfstemning WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BankafstemningBank WHERE Opsaetning = ${setupId}`);
        await coreappdb.callNoResQuery(`DELETE FROM BankafstemningBankInfo WHERE Opsaetning = ${setupId}`);
        await doc.forward('core_del_delete_part_28');
        return doc.complete();
      } catch (err) {
        return doc.reschedule('+1s');
      }
    },
  },
];
