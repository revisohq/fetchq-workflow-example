const handler = async (doc, { client }) => {
  // Forward to multiple queues
  if (doc.iterations === 0) {
    await doc.forward('core_del_UserTabOrder');
    await doc.forward('core_del_bbb');
    await doc.forward('core_del_ccc');
    return doc.reschedule('+1ms');
  }

  // Checking whether the task is done
  if (
    !(await client.utils.checkStatus(doc.subject, [
      'core_del_aaa',
      'core_del_bbb',
      'core_del_ccc',
    ]))
  ) {
    console.log('CORE NOT READY', doc.subject);
    return doc.reschedule('+1ms');
  }

  console.log('CORE DELETION COMPLETED', doc.subject);
  // Push message in rabbit
  return doc.complete();
};

module.exports = {
  queue: 'core_del',
  handler,
};
