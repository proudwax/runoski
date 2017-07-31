/**
 * @module form-callback
 */
modules.define('form-request',
    ['i-bem-dom', 'form'],
    function(provide, bemDom, Form) {
/**
 * form-callback block
 */
provide(bemDom.declBlock(this.name, {

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._form = this.findChildBlock(Form);
                this._form._domEvents().on('submit', function(e, val) {
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
                }.bind(this));
            }
        }
    }

}));

});
