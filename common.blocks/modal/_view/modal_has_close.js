modules.define('modal', function(provide, Modal) {

provide(Modal.declMod({ modName: 'has', modVal: 'close' }, {
    onSetMod: {
        js: {
            inited: function() {
                console.log(this);
                this._elem('close')._events().on('click', function (e) {
                    console.log(this);
                });
            }
        }
    }
}));

});
