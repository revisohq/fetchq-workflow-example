const maintenance = {
  mnt: { delay: "100ms", duration: "5m", limit: 500 },
  sts: { delay: "1m", duration: "5m" },
  cmp: { delay: "1m", duration: "5m" },
  drp: { delay: "1m", duration: "5m" }
};

const makeQueue = (name) => ({
  name,
  enableNotifications: true,
  maintenance
});

module.exports = { makeQueue };
