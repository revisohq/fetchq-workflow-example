const { FEATURE } = require('@forrestjs/hooks');
const { makeQueue } = require('../utils/make-queue');

const FEATURE_NAME = `${FEATURE} routerDelete`;

const routerHandler = async (doc, { client }) => {
  // Forward to multiple queues
  if (doc.iterations === 0) {
    await doc.forward('core_del');
    await doc.forward('ddt_del');
    await doc.forward('tsid_del');
    return doc.reschedule('+1ms');
  }

  // Checking whether the task is done
  if (
    !(await client.utils.checkStatus(doc.subject, [
      'core_del',
      // "ddt_del",
      // "tsid_del"
    ]))
  ) {
    console.log('ROUTER-DELETE NOT READY', doc.subject);
    return doc.reschedule('+1ms');
  }

  console.log('ROUTER-DELETE COMPLETED', doc.subject);
  // Push message in rabbit
  return doc.complete();
};

module.exports = ({ registerAction }) => {
  registerAction({
    hook: '$FETCHQ_REGISTER_QUEUE',
    name: FEATURE_NAME,
    handler: makeQueue('router_delete'),
  });

  registerAction({
    hook: '$FETCHQ_REGISTER_WORKER',
    name: FEATURE_NAME,
    handler: {
      queue: 'router_delete',
      handler: routerHandler,
    },
  });
};
