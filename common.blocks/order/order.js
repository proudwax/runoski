modules.define('order', ['i-bem-dom', 'modal', 'form', 'button'], function(provide, bemDom, Modal, Form, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {      
                this._formOrder = this.findChildBlock({ block: Form, modName: 'order', modVal: true });
                this._blockModal = this._elem('modal').findMixedBlock(Modal);
            }
        }
    },

    _linkOnClick: function (e) {
        e.preventDefault();
        this._formOrder._elem('model').domElem[0].value = e.bemTarget.params.model;
        this._blockModal.setMod('visible', true);
    }
},
{
    lazyInit: true,

    onInit: function () {
        this._domEvents('link').on(
            'pointerclick',
            this.prototype._linkOnClick);
    }
}));

});
