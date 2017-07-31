/**
 * @module validation_phone
 */
modules.define('validation_phone', ['jquery_mask', 'input'], function(provide, jquery_mask, Input) {

var DEFAULT_MESSAGE = 'Field requires phone';

provide(function(field) {
    if(!field.params.phone && !field.params.phone.mask) {
        return function () {
            return null;
        };
    }

    var flag = false,
        option = {
        onComplete: function(cep) {
            flag = true;
        },
        onChange: function(cep){
            flag = false;
        }
    };

    field.findChildBlock(Input).findChildElem('control').domElem.mask(field.params.phone.mask, option);

    return function(val) {
        return !val || flag ? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('phone') || DEFAULT_MESSAGE
        };
    };
});

});
