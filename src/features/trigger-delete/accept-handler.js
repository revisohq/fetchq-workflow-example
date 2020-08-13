/**
 * RESPONSABILITY:
 * Validate a deletion request and deduplicate it from
 * possible previous requests.
 */

const validatePayload = (payload) => {
  if (!payload.agId) {
    return new Error("wrong payload structure");
  }
};

// Responsibility:
// 1. validate AGID: is this our stuff?
// 2. convert AGID -> UPSID
// 3. deduplicate requests

const acceptHandler = async (doc, { client }) => {
  // Formal validation of the payload?
  const validateRes = validatePayload(doc.payload);
  if (validateRes) {
    return doc.kill(validateRes.message);
  }

  const { subject: ticket } = doc;
  const { agId } = doc.payload;

  // Validation of the ID
  if (parseInt(agId, 10) < 100) {
    return doc.kill("not a valid id");
  }

  // Conversion of the current message into the format that
  // will grant uniqueness in the elaboration queue
  const subject = `delete-${doc.payload.agId}`;
  const payload = {
    ...doc.payload,
    upId: `up-${agId}`,
    ticket
  };

  // Deduplication, we take control over the "subject"
  // so to take advangate of the subject uniqueness in a
  // Fetchq queue.
  const res = await client.doc.push("router_delete", {
    subject,
    payload
  });

  // Handle soft failuyre
  if (res.queued_docs === 0) {
    return doc.drop();
  }

  return doc.complete();
};

module.exports = {
  queue: "trigger_delete",
  handler: acceptHandler
};
