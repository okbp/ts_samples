Stanza(function(stanza, params) {
  var q = stanza.query({
      endpoint: "http://integbio.jp/rdf/sparql",
      template: "stanza.rq",
      parameters: params
  });

  q.then(function(data) {
    stanza.render({
      template: "stanza.html",
    });

    //use plain javascript
    stanza.select('#button1').addEventListener("click", function(e) {
      alert('button is clicked!');
    });

    //use jQuery 
    $(stanza.select('#select1')).on('change', function(e) {
      alert(stanza.select('#select1').value);
    });
  });
});
