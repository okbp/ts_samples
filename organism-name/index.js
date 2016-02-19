// organism-name/index.js
Stanza(function(stanza, params) {
  var q = stanza.query({
    endpoint: "http://togogenome.org/sparql-test",
    template: "stanza.rq",
    parameters: params
  });

  q.then(function(data) {
    var rows = data.results.bindings;
    stanza.render({
      template: "stanza.html",
      parameters: {
        organism: rows
      },
    });
  });
});
