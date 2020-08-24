const handler = async (doc, { client }) => {
  // Forward to multiple queues
  if (doc.iterations === 0) {
    await doc.forward('core_del_Update_BetalingsBetingelse');
    // await doc.forward('core_del_delete_part_1');
    // await doc.forward('core_del_delete_part_2');
    // await doc.forward('core_del_delete_part_3');
    // await doc.forward('core_del_delete_part_4');
    // await doc.forward('core_del_delete_part_5');
    // await doc.forward('core_del_delete_part_6');
    // await doc.forward('core_del_aaa');
    // await doc.forward('core_del_bbb');
    // await doc.forward('core_del_ccc');
    return doc.reschedule('+1ms');
  }

  // Checking whether the task is done
  if (
    !(await client.utils.checkStatus(doc.subject, [
      'core_del_aaa',
      // 'core_del_bbb',
      // 'core_del_ccc',
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
