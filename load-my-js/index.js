Stanza(function(stanza, params) {
  stanza.render({
    template: "stanza.html"
  });
  //描画の実行。elementの指定には、stanza.select()を利用する。
  MYCHART.draw(stanza.select('#chart'));
});
