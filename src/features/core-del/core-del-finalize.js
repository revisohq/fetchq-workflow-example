module.exports = (_, { getContext }) => [
  {
    queue: 'core_del_finalize'
    handler: (doc) => {
      const { coreappdb } = getContext();
      console.log('core-del-finalize>', doc.subject);
      return doc.complete();
    },
  },
];
