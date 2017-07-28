block('form')(
    // js()(true),

    tag()('section'),

    content()(function () {
        return {
            elem: 'container',
            content: applyNext()
        };
    }),

    elem('title')(
        tag()('h1')
    )
)
