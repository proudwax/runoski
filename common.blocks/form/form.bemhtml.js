block('form')(
    js()(true),
    
    def()((ctx, json) => {
        ctx.id = json.id;
        ctx.action = json.action;
        ctx.method = json.method || 'get';

        return applyNext();
    }),

    tag()('section'),

    content()(function () {
        return {
            elem: 'container',
            content: (applyNext() || []).map(function (item) {
                item.id && (item.attrs = { id: item.id });
                return item;
            })
        };
    }),

    elem('container')(
        tag()('form'),

        addAttrs()((ctx, json) => {
            return {
                id: ctx.id,
                action: ctx.action,
                method: ctx.method
            };
        })
    ),

    elem('title')(
        tag()('h1')
    )
)
