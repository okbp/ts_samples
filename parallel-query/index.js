Stanza(function(stanza, params) {
  //コード可読性のために、クエリオブジェクトを変数に定義
  var query1 = {
    endpoint: "http://integbio.jp/rdf/sparql",
    template: "query1.rq",
    parameters: params
  };
  var query2 = {
    endpoint: "http://sparql.uniprot.org/sparql",
    template: "query2.rq",
    parameters: params
  };

  //複数クエリの実行
  var q = $.when(stanza.query(query1), stanza.query(query2));
  
  //全てのクエリが終了した時点で実行され、発行したクエリの数の引数が渡される
  q.then(function(data1, data2) {
    //data1ではなく、data1[0]でSPARQL結果が取得できる 
    var query1_list = data1[0].results.bindings;
    var query2_list = data2[0].results.bindings;
    var all_list = query1_list.concat(query2_list);
    stanza.render({
      template: "stanza.html",
      parameters: {
        result: all_list
      }
    });
  });
});
