modules.define('form-field', ['input'], function(provide, Input, FormField) {

provide(FormField.declMod({ modName: 'type', modVal: 'input' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
            }
        }
    },

    getChildBlock: function () {
        return this.findChildBlock(Input);
    }
}));

});
