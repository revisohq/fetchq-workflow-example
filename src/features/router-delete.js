const { FEATURE } = require("@forrestjs/hooks");
const { makeQueue } = require("../utils/make-queue");

const FEATURE_NAME = `${FEATURE} routerDelete`;

const routerHandler = async (doc, { client }) => {
  console.log(doc.payload);

  // Split a big task in many smallER stuff
  await doc.forward("core_del");
  await doc.forward("ddt_del");
  await doc.forward("tsid_del");

  return doc.reschedule("+100y");
};

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: makeQueue("router_delete")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: {
      queue: "router_delete",
      handler: routerHandler
    }
  });
};
