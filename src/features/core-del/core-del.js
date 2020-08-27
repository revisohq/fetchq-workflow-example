const handler = async (doc, { client }) => {
  // Forward to multiple queues
  if (doc.iterations === 0) {
    await doc.forward('core_del_update_constraints');
    return doc.reschedule('+1ms');
  }

  // Checking whether the task is done
  if (
    !(await client.utils.checkStatus(doc.subject, [
      'core_del_finalize',
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
