/**
 * @module validation_email
 */
modules.define('validation_email-list',
    function(provide) {

var DEFAULT_MESSAGE = 'Field requires email inside';

provide(function(field) {
    if(!field.params['email-list'] && !field.params['email-list']['domains-list']) {
        return function () {
            return null;
        };
    }

    return function(val) {
        var re = new RegExp('^([0-9a-zA-Z]*[-._+])*[0-9a-zA-Z]+@(' + field.params['email-list']['domains-list'].join('|') + ')$');

        return !val || re.test(val)? null : {
            field : field.getName() || field.getId(),
            message : field.getValidationMessage('email-list') || DEFAULT_MESSAGE
        };
    };
});

});
