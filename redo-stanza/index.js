Stanza(function(stanza, params) {
  stanza.render({
    template: "stanza.html",
    parameters: {
      start: params.start_pos,
      end: params.end_pos
    }
  });
  //ボタン押下時 
  $(stanza.select("#btn_update")).on('click', function(){
    //画面で指定された値を取得
    var from = stanza.select("#txt_from").value;
    var to = stanza.select("#txt_to").value;
    
    //値を引数に指定したタグのhtmlテキストを組み立てる
    var stanza_elem = '<togostanza-redo-stanza start_pos="' + from + '" end_pos="' + to + '"></togostanza-redo-stanza>'
    //現在の表示スタンザを置き換える
    var current_elem = $("togostanza-redo-stanza");//現在のスタンザエレメント idで検索してもよい
    current_elem.before(stanza_elem);//新しいスタンザエレメントの挿入
    current_elem.remove();//古いスタンザエレメントの削除
  });
});
