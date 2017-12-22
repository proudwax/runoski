modules.define('form-field', ['jquery_mask'], function(provide, $, FormField) {

provide(FormField.declMod({ modName: 'validate', modVal: 'phone' }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                this._valid = false;

                var _this = this,
                    options = {
                        onComplete: function (cep) {
                            _this._valid = true;
                        },
                        onChange: function (cep) {
                            _this._valid = false;
                        }
                    };

                this.getChildBlock()._elem('control').domElem.mask(this.params.pattern, options);
            }
        }
    },

    getValidate: function() {
        return this._valid;
    }
}));

});
