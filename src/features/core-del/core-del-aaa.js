const handler = doc => {
  console.log('AAA>', doc.subject);

  // EXECUTION OF THE TASK
  // Connect to SLQ > delete from...
  // POST://core/delete/aaa/${doc.payload.id}

  return doc.complete();
};

module.exports = {
  queue: 'core_del_aaa',
  handler,
};
