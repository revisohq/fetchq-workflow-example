const handler = async (doc, { client }) => {
  if (
    !(await client.utils.checkStatus(doc.subject, [
      'core_del_aaa',
      'core_del_bbb',
    ]))
  ) {
    console.log('CCC NOT READY');
    return doc.reschedule('+1ms');
  }

  console.log('CCC>', doc.subject);

  // Connect to SLQ > delete from...
  // POST://core/delete/aaa/${doc.payload.id}

  return doc.complete();
};

module.exports = {
  queue: 'core_del_ccc',
  handler,
};
