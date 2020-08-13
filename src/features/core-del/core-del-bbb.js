const handler = doc => {
  console.log('BBB>', doc.subject);

  // Connect to SLQ > delete from...
  // POST://core/delete/aaa/${doc.payload.id}

  return doc.complete();
};

module.exports = {
  queue: 'core_del_bbb',
  handler,
};
