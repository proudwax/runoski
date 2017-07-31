block('form-field')(
    def()(function() {
        var _form_field = this.ctx;
        _form_field.id = _form_field.id || this.generateId();
        this.ctx.js = this.extend(this.ctx.js || {}, { id : _form_field.id });

        _form_field.mods = _form_field.mods || {};

        return applyNext({ _form_field : _form_field });
    }),

    // node_modules/bem-forms/common.blocks/form-field/form-field.bemhtml.js переопределить js()(true)
    js()(function () {
        return this.ctx.js;
    }),

    attrs()(function () {
        return {
            'data-name' : this.ctx.name
        };
    })

);
