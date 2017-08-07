modules.define('form-request', ['i-bem-dom', 'form'], function(provide, bemDom, Form) {

provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this;

                this._form = this.findChildBlock(Form);

                if (this._form.getVal()) {
                    this._form.validate();
                }

                this._form._domEvents().on('submit', function(e, val) {
                    this.onSubmit();
                }.bind(this));

                window[this.domElem[0].id] = (function () {
                    return {
                        validate: function () {
                            var errorFields = [],
                                promFields = _this._form.validate().then(function (invalidFields) {
                                    invalidFields.forEach(function (invalField) {
                                        invalField && errorFields.push(invalField.field);
                                    });
                                    return errorFields;
                                });

                            promFields.then(function (errorFields) {
                                return { isValid: _this.isValid(errorFields), errorFields: errorFields };
                            }).then(function (prom) {
                                console.log(prom);
                                return prom;
                            });

                            return promFields;
                        },
                        getData: function () {
                            return _this._form.getVal();
                        },
                        setData: function (obj) {
                            // { Name: "Test test Test-Test2", Phone: "+7222222222", Email: "test@yandex.ru" }
                            return _this._form.setVal(obj);
                        },
                        submit: function () {
                            return _this.onSubmit();
                        }
                    }
                }());
            }
        }
    },

    isValid: function (errorFields) {
        return !!!errorFields.length;
    },

    onSubmit: function () {
        this._form.validate()
            .then(function (fieldsStatuses) {
                if(this._form.checkFields(fieldsStatuses)) {
                    this._form.onSendForm();
                    this._form.getMessage().hide();
                } else {
                    this._form.getInvalidFields().then(function (invalidFields) {
                        invalidFields[0].getControl().setMod('focused');
                    });
                    this._form.setMessageVal(fieldsStatuses.message);
                    this._form.getMessage().show();
                }
            }.bind(this));
    }

}));

});
