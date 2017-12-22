modules.define('form-field', ['i-bem-dom', 'input'], function(provide, bemDom, Input) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._block = this.getChildBlock();
            }
        },

        'required-error': {
            true: function () {   
                this._events(this._block).once('change', function (e) {
                    this.delMod('required-error');
                });
            }
        }
    },

    getVal: function () {
        return this._block.getVal();
    },

    getValid: function () {
        return this.hasMod('validate') ? this.getValidate() : !!this.getVal();
    }

}));

});
