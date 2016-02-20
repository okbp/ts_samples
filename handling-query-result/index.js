Stanza(function(stanza, params) {
  var q = stanza.query({
    endpoint: "http://integbio.jp/rdf/sparql",
    template: "stanza.rq",
    parameters: params
  });
  q.then(function(data) {
    var raw_data = JSON.stringify(data);
    var bindings = data.results.bindings;
    var bindings_json = JSON.stringify(bindings);
    var unwrap = stanza.unwrapValueFromBinding(data);
    var unwrap_json = JSON.stringify(unwrap);
    stanza.render({
      template: "stanza.html",
      parameters: {
        raw_data: raw_data,
        bindings: bindings,
        bindings_json: bindings_json,
        unwrap: unwrap,
        unwrap_json: unwrap_json 
      },
    });
  });
});
