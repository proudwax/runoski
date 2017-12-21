modules.define('modal', ['link'], function(provide, Link, Modal) {

provide(Modal.declMod({ modName: 'has-close', modVal: true }, {
    onSetMod: {
        js: {
            inited: function() {
                this.__base.apply(this, arguments);
                
                var _this = this;

                this._elem('close')._events(Link).on('click', function (e) {
                    _this.delMod('visible');
                });
            }
        }
    }
}));

});
