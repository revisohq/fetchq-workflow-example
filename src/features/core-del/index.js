const { makeQueue } = require("../../utils/make-queue");
const { FEATURE_NAME } = require("./hooks");

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: [
      makeQueue("core_del"),
      makeQueue("core_del_update_constraints"),
      makeQueue("s3_delete_file"),
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
      makeQueue("core_del_delete_part_60"),
      makeQueue("core_del_finalize"),
    ]
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./core-del-update-constraints")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("../s3-del/s3-delete-file")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./core-del-finalize")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-1")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-2")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-3")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-4")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-5")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-6")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-7")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-8")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-9")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-10")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-11")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-12")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-13")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-14")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-15")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-16")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-17")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-18")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-19")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-20")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-21")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-22")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-23")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-24")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-25")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-26")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-27")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-28")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-29")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-30")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-31")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-32")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-33")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-34")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-35")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-36")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-37")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-38")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-39")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-40")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-41")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-42")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-43")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-44")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-45")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-46")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-47")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-48")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-49")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-50")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-51")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-52")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-53")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-54")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-55")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-56")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-57")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-58")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-59")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./delete-queries/core-del-delete-part-60")
  });

  registerAction({
    hook: "$FETCHQ_REGISTER_WORKER",
    name: FEATURE_NAME,
    handler: require("./core-del")
  });
};
