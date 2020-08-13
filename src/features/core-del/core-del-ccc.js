const handler = async (doc, { client }) => {
  if (
    !(await client.utils.checkStatus(doc.subject, [
      "core_del_aaa",
      "core_del_bbb"
    ]))
  ) {
    console.log("CCC NOT READY");
    return doc.reschedule("+5s");
  }

  console.log("CCC>", doc.subject);

  if (doc.iterations > 1) {
    console.log("CCC COMPLETED");
    return doc.complete();
  }

  // Connect to SLQ > delete from...

  // POST://core/delete/aaa/${doc.payload.id}

  return doc.reschedule("+1s");
};

module.exports = {
  queue: "core_del_ccc",
  handler
};
