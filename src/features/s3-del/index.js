const { makeQueue } = require("../../utils/make-queue");
const { FEATURE_NAME } = require("./hooks");

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: [
      makeQueue("s3_delete_file"),
    ]
  });
  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: [
      require("./s3-delete-file"),
    ]
  });
};
