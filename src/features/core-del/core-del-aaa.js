const { callNonQuery } = require('./db');

const handler = doc => {
  console.log('AAA>', doc.subject);

  var res = callNonQuery('SELECT TOP 2 * FROM Bruger');
  if (res) {
    console.log(res);
    return doc.reschedule('+5s');
  }
  // EXECUTION OF THE TASK
  // Connect to SLQ > delete from...
  // POST://core/delete/aaa/${doc.payload.id}

  return doc.complete();
};

module.exports = {
  queue: 'core_del_aaa',
  handler,
};
