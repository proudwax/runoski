modules.define('catalog', ['i-bem-dom', 'jquery', 'BEMTREE', 'BEMHTML'], function(provide, bemDom, $, BEMTREE, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                $.ajax({
                    type: "GET",
                    url: "/data.json",
                    dataType: "json"
                }).done(function (data) {
                    console.log(data);
                    bemDom.update(
                        _this._elem('content').domElem,
                    //    BEMHTML.apply(BEMTREE.apply({ block: _this.__self.getName(), data: data}))
                    );
                })

            }
        }
    }
}));

});

