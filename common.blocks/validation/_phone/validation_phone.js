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

    if(field.params.phone.min) {
        field.params.phone.min = Number(field.params.phone.min);
    }
    if(field.params.phone.max) {
        field.params.phone.max = Number(field.params.phone.max);
    }

    var flag = false,
        message = field.getValidationMessage('phone') || DEFAULT_MESSAGE,
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

        if (!val) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        var numbs = val.match(/\d/g),
            sumNumbs = numbs.reduce((total, curVal) => {
                return total + Number(curVal);
            }, 0);

        if (field.params.phone.min && sumNumbs < field.params.phone.min) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        if (field.params.phone.max && sumNumbs > field.params.phone.max) {
            return {
                field : field.getName() || field.getId(),
                message : message
            };
        }

        return flag ? null : {
            field : field.getName() || field.getId(),
            message : message
        };
    };
});

});
