const { makeQueue } = require("../../utils/make-queue");
const { FEATURE_NAME } = require("./hooks");
const { routeHandler } = require("./route-handler");
const acceptHandler = require("./accept-handler");

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: makeQueue("trigger_delete")
  });

  registerAction({
    hook: "$FASTIFY_GET",
    name: FEATURE_NAME,
    handler: ["/delete/:agId", routeHandler]
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: acceptHandler
  });
};
