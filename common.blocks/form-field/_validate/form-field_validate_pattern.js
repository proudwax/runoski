/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_pattern'],
    function(provide, validate_pattern, FormField) {
/**
 * Card form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'pattern' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.params.pattern && this.setValidationMessages({
                    pattern : this.params.pattern.message
                });

                this.getValidator().push(validate_pattern(this));
            }
        }
    }

});

provide(FormField);

});
