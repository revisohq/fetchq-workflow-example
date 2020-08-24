const { callNoResQuery, getOpsaetning } = require('./db');

const handler = async doc => {
  console.log('AAA>', doc.subject);
  return doc.complete();
};

module.exports = {
  queue: 'core_del_aaa',
  handler,
};
