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

module.exports = (_, { getContext }) => [
  {
    queue: "trigger_delete",
    handler: async (doc, { client }) => {
      // Formal validation of the payload?
      const validateRes = validatePayload(doc.payload);
      if (validateRes) {
        return doc.kill(validateRes.message);
      }
      const { setupRepository } = getContext();
      console.log('setupRepository ', setupRepository);
      const { subject: ticket } = doc;
      const { agId } = doc.payload;
      let setupId;
      // getting SetupId is also a validation
      try {
        setupId = await setupRepository.getSetupId(agId);
      } catch (err) {
        return doc.kill('Error getting SetupId:', err);
      }
      // Conversion of the current message into the format that
      // will grant uniqueness in the elaboration queue
      const subject = `delete-${doc.payload.agId}`;
      const payload = {
        ...doc.payload,
        setupId,
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
    }
  },
];
