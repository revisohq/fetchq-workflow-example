
const handler = doc => {
  console.log('core-del-finalize>', doc.subject);
  return doc.complete();
};

module.exports = {
  queue: 'core_del_finalize',
  handler,
};
