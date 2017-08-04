block('form-request')(
    js()((ctx, json) => {
        ctx.js = ctx.extend(ctx.js || {}, { id: ctx.generateId() });

        return ctx.js;
    }),

    addAttrs()((ctx, json) => {
        return {
            id: 'MyForm' + ctx.js.id.slice(-2)
        };
    }),

    elem('title')(
        tag()('h1')
    ),

    elem('desc')(
        tag()('span')
    )
);
