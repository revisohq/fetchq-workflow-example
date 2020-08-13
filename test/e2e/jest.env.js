const envalid = require('envalid');

const PGSTRING = 'postgresql://gitpod:gitpod@localhost:5432/postgres';
const BACKEND_ROOT = 'http://localhost:8080';

module.exports = () =>
  envalid.cleanEnv(process.env, {
    PGSTRING: envalid.url({
      default: PGSTRING,
    }),
    TEST_SERVER_ROOT: envalid.url({
      default: BACKEND_ROOT,
    }),
    TEST_STATUS_CHECK_URL: envalid.url({
      default: `${BACKEND_ROOT}/healthz`,
    }),
    TEST_STATUS_CHECK_INTERVAL: envalid.num({ default: 250 }),
  });
