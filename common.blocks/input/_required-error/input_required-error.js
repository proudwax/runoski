modules.define('input', function(provide, Input) {

provide(Input.declMod({ modName: 'required-error', modVal: true }, {
    onSetMod: {
        'required-error': {
            true: function () {
                this._events(Input).once('change', function (e) {
                    this.delMod('required-error');
                });
            }
        }
    }
}));

});
