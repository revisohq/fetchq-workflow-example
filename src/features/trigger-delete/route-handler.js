/**
 * RESPONSABILITY:
 * expose an API that ingest a deletion requests.
 * this "should never fail" and simply acknowledges the intake
 * towards the end user.
 */

const routeHandler = async (req, reply) => {
  // Attempt to queue the message in the ingest queue
  const { subject } = await req.fetchq.doc.append('trigger_delete', req.params);

  // The intake could fail in case the queue does not exists
  // or in case there are problems with the database
  if (!subject) {
    reply.status(500).send('Could not take the request atm :-(');
    return;
  }

  reply.send({
    ...req.params,
    subject,
  });
};

module.exports = { routeHandler };
