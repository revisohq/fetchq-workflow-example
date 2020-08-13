const FEATURE_NAME = "queuesDefinition";

const maintenance = {
  mnt: { delay: "100ms", duration: "5m", limit: 500 },
  sts: { delay: "1m", duration: "5m" },
  cmp: { delay: "1m", duration: "5m" },
  drp: { delay: "1m", duration: "5m" }
};

module.exports = ({ registerAction }) => {
  registerAction({
    hook: "$FETCHQ_REGISTER_QUEUE",
    name: FEATURE_NAME,
    handler: [
      {
        name: "router_delete",
        enableNotifications: true,
        maintenance
      },
      {
        name: "ddt_del",
        enableNotifications: true,
        maintenance
      },
      {
        name: "tsid_del",
        enableNotifications: true,
        maintenance
      }
    ]
  });
};
