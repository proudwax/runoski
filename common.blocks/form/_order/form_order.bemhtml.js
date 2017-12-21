block('form').mod('order', true)(
    content()((node, json) => {
        return [
            {
                elem: 'model'
            },
            applyNext()
        ];
    }),

    elem('model')(
        tag()('input'),

        addAttrs()(_ => {
            return {
                type: 'hidden',
                name: 'model'
            };
        })
    )
);
