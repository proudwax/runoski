/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_email-list'],
    function(provide, validation_EmailList, FormField) {
/**
 * Card form-field validation
 * @exports
 * @class form-field
 * @bem
 */
FormField.declMod({ modName : 'validate', modVal : 'email-list' }, /** @lends form-field.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this.params['email-list'] && this.setValidationMessages({
                    'email-list' : this.params['email-list'].message
                });

                this.getValidator().push(validation_EmailList(this));
            }
        }
    }

});

provide(FormField);

});
