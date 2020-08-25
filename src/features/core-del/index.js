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
      makeQueue("core_del_delete_part_21"),
      makeQueue("core_del_delete_part_22"),
      makeQueue("core_del_delete_part_23"),
      makeQueue("core_del_delete_part_24"),
      makeQueue("core_del_delete_part_25"),
      makeQueue("core_del_delete_part_26"),
      makeQueue("core_del_delete_part_27"),
      makeQueue("core_del_delete_part_28"),
      makeQueue("core_del_delete_part_29"),
      makeQueue("core_del_delete_part_30"),
      makeQueue("core_del_delete_part_31"),
      makeQueue("core_del_delete_part_32"),
      makeQueue("core_del_delete_part_33"),
      makeQueue("core_del_delete_part_34"),
      makeQueue("core_del_delete_part_35"),
      makeQueue("core_del_delete_part_36"),
      makeQueue("core_del_delete_part_37"),
      makeQueue("core_del_delete_part_38"),
      makeQueue("core_del_delete_part_39"),
      makeQueue("core_del_delete_part_40"),
      makeQueue("core_del_delete_part_41"),
      makeQueue("core_del_delete_part_42"),
      makeQueue("core_del_delete_part_43"),
      makeQueue("core_del_delete_part_44"),
      makeQueue("core_del_delete_part_45"),
      makeQueue("core_del_delete_part_46"),
      makeQueue("core_del_delete_part_47"),
      makeQueue("core_del_delete_part_48"),
      makeQueue("core_del_delete_part_49"),
      makeQueue("core_del_delete_part_50"),
      makeQueue("core_del_delete_part_51"),
      makeQueue("core_del_delete_part_52"),
      makeQueue("core_del_delete_part_53"),
      makeQueue("core_del_delete_part_54"),
      makeQueue("core_del_delete_part_55"),
      makeQueue("core_del_delete_part_56"),
      makeQueue("core_del_delete_part_57"),
      makeQueue("core_del_delete_part_58"),
      makeQueue("core_del_delete_part_59"),
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
      require("./delete-queries/core-del-delete-part-21"),
      require("./delete-queries/core-del-delete-part-22"),
      require("./delete-queries/core-del-delete-part-23"),
      require("./delete-queries/core-del-delete-part-24"),
      require("./delete-queries/core-del-delete-part-25"),
      require("./delete-queries/core-del-delete-part-26"),
      require("./delete-queries/core-del-delete-part-27"),
      require("./delete-queries/core-del-delete-part-28"),
      require("./delete-queries/core-del-delete-part-29"),
      require("./delete-queries/core-del-delete-part-30"),
      require("./delete-queries/core-del-delete-part-31"),
      require("./delete-queries/core-del-delete-part-32"),
      require("./delete-queries/core-del-delete-part-33"),
      require("./delete-queries/core-del-delete-part-34"),
      require("./delete-queries/core-del-delete-part-35"),
      require("./delete-queries/core-del-delete-part-36"),
      require("./delete-queries/core-del-delete-part-37"),
      require("./delete-queries/core-del-delete-part-38"),
      require("./delete-queries/core-del-delete-part-39"),
      require("./delete-queries/core-del-delete-part-40"),
      require("./delete-queries/core-del-delete-part-41"),
      require("./delete-queries/core-del-delete-part-42"),
      require("./delete-queries/core-del-delete-part-43"),
      require("./delete-queries/core-del-delete-part-44"),
      require("./delete-queries/core-del-delete-part-45"),
      require("./delete-queries/core-del-delete-part-46"),
      require("./delete-queries/core-del-delete-part-47"),
      require("./delete-queries/core-del-delete-part-48"),
      require("./delete-queries/core-del-delete-part-49"),
      require("./delete-queries/core-del-delete-part-50"),
      require("./delete-queries/core-del-delete-part-51"),
      require("./delete-queries/core-del-delete-part-52"),
      require("./delete-queries/core-del-delete-part-53"),
      require("./delete-queries/core-del-delete-part-54"),
      require("./delete-queries/core-del-delete-part-55"),
      require("./delete-queries/core-del-delete-part-56"),
      require("./delete-queries/core-del-delete-part-57"),
      require("./delete-queries/core-del-delete-part-58"),
      require("./delete-queries/core-del-delete-part-59"),
      require("./core-del-aaa"),
      require("./core-del-bbb"),
      require("./core-del-ccc")
    ]
  });
};
