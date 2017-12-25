modules.define('order', ['i-bem-dom', 'modal', 'form', 'button', 'link'], function(provide, bemDom, Modal, Form, Button, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this,
                    formOrder = this.findChildBlock({ block: Form, modName: 'order', modVal: true });

                    this._elems('link').map(function (link) {
                    link._domEvents(Button).on('click', function (e) {
                        e.preventDefault();
                    });
                    
                    link._events(Button).on('click', function (e) {
                        formOrder._elem('model').domElem[0].value = link.params.model;
                        _this._elem('modal').findMixedBlock(Modal).setMod('visible', true);
                    });
                });
            }
        }
    }
}));

});
