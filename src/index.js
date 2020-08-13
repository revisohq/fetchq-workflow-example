const { runHookApp } = require('@forrestjs/hooks');

// List of services
const serviceFastify = require('@forrestjs/service-fastify');
const serviceFetchq = require('@forrestjs/service-fetchq');
const serviceFastifyFetchq = require('@forrestjs/service-fastify-fetchq');

// List of features
const triggerDelete = require('./features/trigger-delete');
const routerDelete = require('./features/router-delete');
const coreDel = require('./features/core-del');

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
  services: [serviceFetchq, serviceFastify, serviceFastifyFetchq],
  features: [triggerDelete, routerDelete, coreDel],
});
