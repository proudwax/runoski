modules.define('catalog', ['i-bem-dom', 'jquery'], function (provide, bemDom, $) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;
                this.setMod('loading');

                $.ajax({
                    type: "GET",
                    url: "/data.json",
                    dataType: "json"
                }).done(function (data) {
                    console.log(data);
                    _this._elem('content')._replaceContent({ block: 'catalog', elem: 'content', data: data.data });
                    _this.delMod('loading');
                });
            }
        },

        loading: {
            true: function () {
                this._elem('content')._updateContent({ block: 'spin', mods: { theme: 'islands', size: 'l', visible: true } });
            }
        }
    }
}));

});

