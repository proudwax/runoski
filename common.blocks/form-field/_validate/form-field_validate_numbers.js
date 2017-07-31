/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_numbers', 'objects'],
    function(provide, validate_numbers, objects, FormField) {
/**
 * E-mail form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'numbers' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.params.numbers && this.setValidationMessages({
                    numbers : this.params.numbers.message
                });

                this.getValidator().push(validate_numbers(this));
            }
        }
    }

});

provide(FormField);

});
