/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_phone-sum-numb'],
    function(provide, validate_phoneSumNumb, FormField) {
/**
 * Card form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'phone-sum-numb' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
console.log(this);
                this.params.pattern && this.setValidationMessages({
                    'phone-sum-numb' : this.params.pattern.message
                });

                this.getValidator().push(validate_phoneSumNumb(this));
            }
        }
    }

});

provide(FormField);

});
