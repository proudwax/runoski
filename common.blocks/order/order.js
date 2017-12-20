modules.define('order', ['i-bem-dom', 'modal', 'button'], function(provide, bemDom, Modal, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var _this = this;

                this._elems('link').map(function (link) {
                    /* link._domEvents(Button).on('click', function (e) {
                        e.preventDefault();
                    }); */
                    
                    link._events(Button).on('click', function (e) {
                        _this._elem('modal').findMixedBlock(Modal).setMod('visible', true);
                    });
                });
            }
        }
    }
}));

});
