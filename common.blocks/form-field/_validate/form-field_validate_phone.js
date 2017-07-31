/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_phone', 'objects'],
    function(provide, validate_phone, objects, FormField) {
/**
 * E-mail form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'phone' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.params.phone && this.setValidationMessages({
                    phone : this.params.phone.message
                });

                this.getValidator().push(validate_phone(this));
            }
        }
    }

});

provide(FormField);

});
