block('form-field')(
    js()((ctx, json) => {
        ctx._id = ctx.generateId();
        return { id : ctx._id };
    }),

    content()((ctx, json) => {
        let content =  json.content.map(function (item) {
            item.mods =  ctx.extend({ required: json.mods.required }, item.mods);

            return item.block ? {
                elem: item.block,
                content: item
            } : item;
        });

        return content;
    }),

    elem('label')(
        tag()('label'),

        addAttrs()((ctx, json) => {
            return {
                for: ctx._id
            };
        })
    ),

    elem('input')(
        content()((ctx, json) => {
            applyNext().id = ctx._id;
            return applyNext();
        })
    )
)
