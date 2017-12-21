modules.define('form', ['i-bem-dom', 'button', 'form-field'], function(provide, bemDom, Button, FormField) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this,
                    fields = this.findChildBlocks(FormField);

                _this.storege = fields.map(function (field) {
                    return field.hasMod('required') && field.getChildBlock();             
                });
                
                this._domEvents().on('submit', function (e) {
                    e.preventDefault();
                    
                    _this.flag = _this.getFlagToSend();
                    console.log(_this.flag);
                });
            }
        }
    },

    getFlagToSend: function () {
        return this.storege.reduce(function (prev, item) {
            if (!item.getVal()) {
                item.setMod('required-error');
                return prev && false;
            } else {
                return prev && true;
            }
        }, true);
    }
}));

});
