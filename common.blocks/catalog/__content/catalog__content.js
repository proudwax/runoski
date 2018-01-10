modules.define('catalog__content', ['i-bem-dom', 'BEMTREE', 'BEMHTML'], function (provide, bemDom, BEMTREE, BEMHTML) {

provide(bemDom.declElem('catalog', 'content', {
    onSetMod: {
        js: {
            inited: function() {
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
    },

    _appendContent: function (content) {
        bemDom.append(
            this.domElem,
            BEMHTML.apply(BEMTREE.apply(content))
        );

        return this;
    }
}));

});
