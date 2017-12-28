modules.define('catalog__content', ['i-bem-dom', 'BEMTREE', 'BEMHTML'], function (provide, bemDom, BEMTREE, BEMHTML) {

provide(bemDom.declElem('catalog', 'content', {
    onSetMod: {
        js: {
            inited: function() {
                // var _this = this;

                // this._blockName = this._block().__self.getName();
                // this.setMod('loading');

                // console.log(this._blockName);

                // $.ajax({
                //     type: "GET",
                //     url: "/data.json",
                //     dataType: "json"
                // }).done(function (data) {
                //     _this.delMod('loading');
                //     console.log(data);
                //     // bemDom.replace(
                //     //     this.domElem,
                //     //     BEMHTML.apply(BEMTREE.apply({ 
                //     //         block: this._blockName, 
                //     //         elem: 'content', 
                //     //         content: 're' 
                //     //     }))
                //     // );
                // });
            }
        }
    },

    _updateContent: function (content) {
        bemDom.update(
            this.domElem,
            BEMHTML.apply(BEMTREE.apply(content))
        );

        return this;
    },
    
    _replaceContent: function (content) {
        bemDom.replace(
            this.domElem,
            BEMHTML.apply(BEMTREE.apply(content))
        );

        return this;
    }
}));

});
