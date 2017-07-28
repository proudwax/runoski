modules.define('form', ['i-bem-dom', 'form-field', 'button', 'BEMHTML'], function(provide, bemDom, FormField, Button, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited' : function() {
                var _this = this;

                _this._data = [];

                window.MyForm = {
                    validate : function () {
                        this.getData();
                    },
                    getData: function () {
                        _this.findChildBlocks(FormField)._entities.map(function (item, i) {

                        });
                    },
                    setData: function (obj) {},
                    submit: function () {
                        this.validate();
                        console.log(this);
                    }
                };

                this._domEvents().on('submit', function(e) {
                    e.preventDefault();

                    MyForm.submit();
                });
            }


        }
    }

}));

});
