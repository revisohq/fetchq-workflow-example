const handler = (doc) => {
  console.log("BBB>", doc.subject);

  // Connect to SLQ > delete from...

  // POST://core/delete/aaa/${doc.payload.id}

  if (doc.iterations > 1) {
    console.log("AAA DONE");
    return doc.complete();
  }

  return doc.reschedule("+1s");
};

module.exports = {
  queue: "core_del_bbb",
  handler
};
