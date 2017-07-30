modules.define('form-field', ['i-bem-dom', 'input', 'popup'], function(provide, bemDom, Input, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited' : function() {
                this._input = this.findChildBlock(Input);
                this._popup = this.findChildBlock(Popup)
                                    .setAnchor(this._input);

                this._events(Input).on({ modName: 'focused', modVal: '' }, function() {
                    console.log(this);
                    this._popup.setMod('visible');
                });
            }
        }
    },

    getData: function () {
        return {
            name : this._input.findChildElem('control').domElem[0].name,
            value: this._input.getVal() };
    }

}));

});
