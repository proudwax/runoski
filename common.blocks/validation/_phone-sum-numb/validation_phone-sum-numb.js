/**
 * @module validation_email
 */
modules.define('validation_phone-sum-numb',
    function(provide) {

var DEFAULT_MESSAGE = 'Sum of phone numbers incorrect';

provide(function(field) {
    var message = field.getValidationMessage('phone-sum-numb') || DEFAULT_MESSAGE;

    if(field.params.min) {
        field.params.min = Number(field.params.min);
    }
    if(field.params.max) {
        field.params.max = Number(field.params.max);
    }

    return function(val) {
        if(!val) {
            return null;
        }

        console.log(parseInt(val));

        if(!field.params) {
            return null;
        }

        val = Number(val);
        if(field.params.min && val < field.params.min) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }
        if(field.params.max && val > field.params.max) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        return null;
    };
});

});
