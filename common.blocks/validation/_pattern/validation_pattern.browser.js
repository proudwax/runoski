/**
 * @module validation_pattern
 */
modules.define('validation_pattern',
    function(provide) {

var DEFAULT_MESSAGE = 'Should match provided pattern "%s"';
provide(function(field) {
    if(!field.params.pattern && !field.params.pattern.value) {
        return function () {
            return null;
        };
    }

    // node_modules/bem-forms/common.blocks/validation/_pattern/validation_pattern.browser.js
    // var re = new RegExp(field.params.value);  ошибка в свойствах field
    var re = new RegExp(field.params.pattern.value);
    return function(val) {
        return !val || re.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('pattern') || DEFAULT_MESSAGE.replace(/%s/g, field.params.value)
        };
    };

});

});
