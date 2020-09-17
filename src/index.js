const { runHookApp } = require('@forrestjs/hooks');

// List of services
const serviceFastify = require('@forrestjs/service-fastify');
const serviceFetchq = require('@forrestjs/service-fetchq');
const serviceFastifyFetchq = require('@forrestjs/service-fastify-fetchq');
const serviceFastifyHealthz = require('@forrestjs/service-fastify-healthz');
const serviceCoreAppDb = require('./services/service-revisiohq-core-app-db');
const serviceCoreAppDbMock = require('../test/mocks/core-db-mock');

// List of features
const triggerDelete = require('./features/trigger-delete');
const routerDelete = require('./features/router-delete');
const coreDel = require('./features/core-del');
const testUtils = require('./test-utils');

const isTest = ['test'].includes(process.env.NODE_ENV);
const isDevOrTest = ['development', 'test'].includes(process.env.NODE_ENV);
runHookApp({
  trace: 'compact',
  settings: {
    fastify: {
      meta: null,
    },
    fetchq: {
      connectionString: '',
      pool: { max: 1 },
    },
  },
  services: [
    serviceFetchq,
    serviceFastify,
    serviceFastifyFetchq,
    serviceFastifyHealthz,
    isTest ? serviceCoreAppDbMock : serviceCoreAppDb
  ],
  features: [
    triggerDelete,
    routerDelete,
    coreDel,
    ...(isDevOrTest ? [testUtils] : []),
  ],
});
