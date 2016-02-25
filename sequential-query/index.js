Stanza(function(stanza, params) {
  //一つ目のクエリの実行
  var q1 = stanza.query({
    endpoint: "http://integbio.jp/rdf/sparql",
    template: "query1.rq",
    parameters: params
  });
  //一つ目のクエリの終了イベント
  q1.then(function(data){
    //一つ目のクエリの実行結果を取得して、次のクエリのパラメータにする
    var first_item = data.results.bindings[0];
    var subject_value = first_item.s.value;
    //二つ目のクエリの実行
    var q2 = stanza.query({
      endpoint: "http://integbio.jp/rdf/sparql",
      template: "query2.rq",
      parameters: {
        subject: subject_value
      }
    });
    //二つ目のクエリの終了イベント
    q2.then(function(data){
      var result_list = data.results.bindings;
      //結果を表示
      stanza.render({
        template: "stanza.html",
        parameters: {
          subject: subject_value,
          result: result_list
        }
      });
    });
  });
});
