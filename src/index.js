const { runHookApp } = require('@forrestjs/hooks');

// List of services
const serviceFastify = require('@forrestjs/service-fastify');
const serviceFetchq = require('@forrestjs/service-fetchq');
const serviceFastifyFetchq = require('@forrestjs/service-fastify-fetchq');
const serviceFastifyHealthz = require('@forrestjs/service-fastify-healthz');

// List of features
const triggerDelete = require('./features/trigger-delete');
const routerDelete = require('./features/router-delete');
const coreDel = require('./features/core-del');
const testUtils = require('./test-utils');

const isDev = ['development', 'test'].includes(process.env.NODE_ENV);
console.log(process.env.NODE_ENV, isDev);

runHookApp({
  trace: 'compact',
  settings: {
    fastify: {
      meta: null,
    },
    fetchq: {
      connectionString: 'postgresql://gitpod:gitpod@localhost:5432/postgres',
      pool: { max: 1 },
    },
  },
  services: [
    serviceFetchq,
    serviceFastify,
    serviceFastifyFetchq,
    serviceFastifyHealthz,
    ...(isDev ? [testUtils] : []),
  ],
  features: [triggerDelete, routerDelete, coreDel],
});
