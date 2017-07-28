modules.define('form-field', ['i-bem-dom', 'input'], function(provide, bemDom, Input) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited' : function() {
                this._input = this.findChildBlock(Input);
            }
        }
    },

    getData: function () {
        return this._input.getVal();
    }

}));

});
