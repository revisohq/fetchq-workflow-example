const { makeQueue } = require("../../utils/make-queue");
const { FEATURE_NAME } = require("./hooks");

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: [
      makeQueue("core_del"),
      makeQueue("core_del_aaa"),
      makeQueue("core_del_bbb"),
      makeQueue("core_del_ccc")
    ]
  });
  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: [
      require("./core-del"),
      require("./core-del-aaa"),
      require("./core-del-bbb"),
      require("./core-del-ccc")
    ]
  });
};
