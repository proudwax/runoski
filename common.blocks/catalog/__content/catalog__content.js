modules.define('catalog__content', ['i-bem-dom', 'jquery', 'BEMTREE', 'BEMHTML'], function (provide, bemDom, $, BEMTREE, BEMHTML) {

provide(bemDom.declElem('catalog', 'content', {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                console.log(this);

                $.ajax({
                    type: "GET",
                    url: "/data.json",
                    dataType: "json"
                }).done(function (data) {
                    console.log(data);
                    bemDom.replace(
                        _this.domElem,
                        BEMHTML.apply(BEMTREE.apply({ block: _this.__self.getName(), elem: 'content', data: data }))
                    );
                })
            }
        }
    }
}));

});
