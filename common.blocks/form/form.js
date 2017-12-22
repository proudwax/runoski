modules.define('form', ['i-bem-dom', 'button', 'form-field', 'jquery', 'BEMHTML', 'BEMTREE'], function (provide, bemDom, Button, FormField, $, BEMHTML, BEMTREE) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this,
                    fields = this.findChildBlocks(FormField);

                this._submit = this.findChildBlock({ block: Button, modName: 'type', modVal: 'submit' });
                this.storage = fields.map(function (field) {
                    return field.hasMod('required') && field;
                });
                
                this._domEvents().on('submit', function (e) {
                    e.preventDefault();
                    this._submit.delMod('focused');
                    
                    if(_this.getFlagToSend()){
                        _this.sendForm();
                    }
                });
            }
        }
    },

    getFlagToSend: function () {
        return this.storage.reduce(function (prev, item) {
            item.setMod('required-error', !item.getValid());
            return prev && item.getValid();
        }, true);
    },

    sendForm: function () {
        var _this = this,
            form = this.domElem[0];
        
        this.showMessage().showSpin();

        $.ajax({
            // method: form.method,
            method: 'get',
            url: form.action,
            data: this.domElem.serialize(),
            dataType: 'json'
        })
        .done(function (res) {
            // console.log(res);

            _this.setMessage(res);
        })
        .fail(function (res) {
            console.log({ 'status': 'error', 'info': res.responseText });
        });
    },

    showMessage: function () {
        this._elem('message').setMod('visible');

        return this;
    },

    setMessage: function (res) {
        bemDom.update(this._elem('message').domElem, res.message);

        return this;
    },

    showSpin: function () {
        bemDom.update(this._elem('message').domElem, BEMHTML.apply({ block: 'spin', mods: { theme: 'islands', size: 'l', visible: true } }));

        return this;
    }
}));

});
