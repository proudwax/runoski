modules.define('form', ['i-bem-dom', 'form-field', 'button', 'BEMHTML'], function(provide, bemDom, FormField, Button, BEMHTML) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited' : function() {
                var _this = this;

                window.MyForm = (function () {

                    return {
                        validate : function () {
                            var errorFields = [];

                            _this.findChildBlocks(FormField)._entities.forEach(function (item, i) {
                                // return item.validate();
                                if (true) {
                                    errorFields.push('name' + i);
                                }
                            });

                            if (!!!errorFields[0]) {
                                return { isValid: true };
                            } else {
                                return { isValid: false, errorFields: errorFields };
                            }
                        },
                        getData: function () {
                            return _this.findChildBlocks(FormField)._entities.map(function (item, i) {
                                return item.getData();
                            });
                        },
                        setData: function (obj) {},
                        submit: function () {
                            console.log(this.validate());
                        }
                    };
                }());

                this._data = MyForm.getData();

                this._domEvents().on('submit', function(e) {
                    e.preventDefault();

                    MyForm.submit();
                });
            }


        }
    }

}));

});
