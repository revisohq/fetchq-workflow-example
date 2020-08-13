const handler = (doc) => {
  console.log("AAA>", doc.subject);

  // Validation of the task
  if (doc.iterations > 1) {
    console.log("AAA DONE");
    return doc.complete();
  }

  // EXECUTION OF THE TASK
  // Connect to SLQ > delete from...
  // POST://core/delete/aaa/${doc.payload.id}

  return doc.reschedule("+1s");
};

module.exports = {
  queue: "core_del_aaa",
  handler
};
