modules.define('form-field', ['jquery_mask'], function(provide, $, FormField) {

provide(FormField.declMod({ modName: 'validate', modVal: 'phone' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);

                this.getChildBlock()._elem('control').domElem.mask(this.params.pattern);
            }
        }
    },

    getValidate: function() {
        
    }
}));

});
