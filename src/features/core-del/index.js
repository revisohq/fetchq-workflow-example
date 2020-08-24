const { makeQueue } = require("../../utils/make-queue");
const { FEATURE_NAME } = require("./hooks");

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: [
      makeQueue("core_del"),
      makeQueue("core_del_Update_BetalingsBetingelse"),
      makeQueue("core_del_delete_part_1"),
      makeQueue("core_del_delete_part_2"),
      makeQueue("core_del_delete_part_3"),
      makeQueue("core_del_delete_part_4"),
      makeQueue("core_del_delete_part_5"),
      makeQueue("core_del_delete_part_6"),
      makeQueue("core_del_delete_part_7"),
      makeQueue("core_del_delete_part_8"),
      makeQueue("core_del_delete_part_9"),
      makeQueue("core_del_delete_part_10"),
      makeQueue("core_del_delete_part_11"),
      makeQueue("core_del_delete_part_12"),
      makeQueue("core_del_delete_part_13"),
      makeQueue("core_del_delete_part_14"),
      makeQueue("core_del_delete_part_15"),
      makeQueue("core_del_delete_part_16"),
      makeQueue("core_del_delete_part_17"),
      makeQueue("core_del_delete_part_18"),
      makeQueue("core_del_delete_part_19"),
      makeQueue("core_del_delete_part_20"),
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
      require("./core-del-Update-BetalingsBetingelse"),
      require("./delete-queries/core-del-delete-part-1"),
      require("./delete-queries/core-del-delete-part-2"),
      require("./delete-queries/core-del-delete-part-3"),
      require("./delete-queries/core-del-delete-part-4"),
      require("./delete-queries/core-del-delete-part-5"),
      require("./delete-queries/core-del-delete-part-6"),
      require("./delete-queries/core-del-delete-part-7"),
      require("./delete-queries/core-del-delete-part-8"),
      require("./delete-queries/core-del-delete-part-9"),
      require("./delete-queries/core-del-delete-part-10"),
      require("./delete-queries/core-del-delete-part-11"),
      require("./delete-queries/core-del-delete-part-12"),
      require("./delete-queries/core-del-delete-part-13"),
      require("./delete-queries/core-del-delete-part-14"),
      require("./delete-queries/core-del-delete-part-15"),
      require("./delete-queries/core-del-delete-part-16"),
      require("./delete-queries/core-del-delete-part-17"),
      require("./delete-queries/core-del-delete-part-18"),
      require("./delete-queries/core-del-delete-part-19"),
      require("./delete-queries/core-del-delete-part-20"),
      require("./core-del-aaa"),
      require("./core-del-bbb"),
      require("./core-del-ccc")
    ]
  });
};
