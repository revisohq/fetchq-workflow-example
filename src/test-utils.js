const FEATURE_NAME = 'TEST_UTILS';

const fetchqResetHandler = async (req, reply) => {
  await Promise.all([
    req.fetchq.pool.query('drop schema if exists fetchq_catalog cascade;'),
    await req.fetchq.pool.query('drop schema if exists public cascade;'),
  ]);
  await req.fetchq.pool.query('create schema if not exists public;');
  await req.fetchq.boot();
  reply.send('ok');
};

const fetchqQueryHandler = async (req, reply) =>
  req.fetchq.pool.query(req.body.q, req.body.p);

const fetchqCheckStatusHandler = (req, reply) =>
  req.fetchq.utils.checkStatus(
    req.body.subject,
    req.body.queues,
    req.body.status || 3,
  );

module.exports = ({ registerAction }) => {
  registerAction({
    hook: '$FASTIFY_ROUTE',
    name: FEATURE_NAME,
    handler: ({ registerRoute }) => {
      registerRoute({
        method: 'GET',
        url: '/test/fetchq/reset',
        handler: fetchqResetHandler,
      });
      registerRoute({
        method: 'POST',
        url: '/test/fetchq/query',
        handler: fetchqQueryHandler,
      });
      registerRoute({
        method: 'POST',
        url: '/test/fetchq/checkStatus',
        handler: fetchqCheckStatusHandler,
      });
    },
  });
};
