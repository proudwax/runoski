modules.define('form', ['modal', 'input'], function(provide, Modal, Input, Form) {

provide(Form.declMod({ modName: 'order', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                
                var modal = this.findParentBlock(Modal);

                this._events(modal).on({ modName: 'visible', modVal: true }, this._findFirstInput);
            }
        }
    },

    _findFirstInput: function() {
        return this.findChildBlock(Input).setMod('focused');
    }
}));

});
