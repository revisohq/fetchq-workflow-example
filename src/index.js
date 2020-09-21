const { runHookApp } = require('@forrestjs/hooks');

// List of services
const serviceFastify = require('@forrestjs/service-fastify');
const serviceFetchq = require('@forrestjs/service-fetchq');
const serviceFastifyFetchq = require('@forrestjs/service-fastify-fetchq');
const serviceFastifyHealthz = require('@forrestjs/service-fastify-healthz');
const serviceCoreAppDb = require('./services/service-core-app-db');
const serviceS3 = require('./services/service-core-app-s3');
const serviceCoreAppDbMock = require('../test/mocks/core-db-mock');
const serviceS3Mock = require('../test/mocks/s3-mock');

// List of features
const triggerDelete = require('./features/trigger-delete');
const routerDelete = require('./features/router-delete');
const coreDel = require('./features/core-del');
const setupRepository = require('./repositories/setup-repository/setup-repository');
const fileRepository = require('./repositories/file-repository/file-repository');
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
      connectionString: 'connectionString',
      pool: { max: 1 },
    },
  },
  services: [
    serviceFetchq,
    serviceFastify,
    serviceFastifyFetchq,
    serviceFastifyHealthz,
    isTest ? serviceS3Mock : serviceS3,
    isTest ? serviceCoreAppDbMock : serviceCoreAppDb,
    isTest ? '[TODO]' : setupRepository,
    isTest ? '[TODO]' : fileRepository
  ],
  features: [
    triggerDelete,
    routerDelete,
    coreDel,
    ...(isDevOrTest ? [testUtils] : []),
  ],
});
