modules.define('form', ['i-bem-dom', 'BEMHTML', 'form-field', 'button'], function(provide, bemDom, BEMHTML, FormField, Button, Form) {

var DEFAULT_MESSAGE = 'Success!',
    i = 0;

provide(Form.declMod({ modName: 'async', modVal: true }, {
    onSetMod: {
        'js': {
            'inited' : function() {
                this._submit = this.findChildBlock({ block: Button, modName: 'type', modVal: 'submit'});
            }
        },

        'waiting': {
            true: function () {
                var wait = BEMHTML.apply({ block: 'form', elem: 'waiting' }),
                    thisNode = this.domElem[0],
                    fields = this.findChildBlocks(FormField);

                fields._entities.map(function (field) {
                    field.getMessage() && field.getMessage().hide();
                });

                bemDom.append(thisNode, wait);
                // добавить подгрузку из BEMHTML спиннера с ожиданием, запустить проверку полей + отправку сообщения
            },

            '': function () {
                bemDom.destruct(this.findChildElem('waiting').domElem);
            }
        },

        'message': {
            true: function () {
                this.delMod('waiting');
            }
        },
    },

    onSendForm: function () {
        this.setMod('waiting');
        this._submit.setMod('disabled');

        this._onSend();
    },

    _onSend: function () {
        var _this = this,
            domForm = this.domElem,
            xhttp = new XMLHttpRequest();

        xhttp.open(domForm[0].method, domForm[0].action, true);
        xhttp.send();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                _this.onSuccessForm(JSON.parse(this.responseText));
            }
        };
    },

    onSuccessForm: function (response) {
        var message = BEMHTML.apply({ block: 'form', elem: 'message', content: response.reason || DEFAULT_MESSAGE }),
            thisNode = this.domElem[0],
            _this = this;

        if (response.status == 'progress') {
            setTimeout(function () {
                _this._onSend();
                console.info('Request: ' + i++);
            }, response.timeout);
        } else {
            this.setMod('status', response.status)
                .setMod('message');

            bemDom.append(thisNode, message);
        }
    }
}));

});
