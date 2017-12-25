block('logo')(
    tag()('a'),

    addAttrs()(_ => {
        return {
            href: '/'
        }
    }),

    content()(_ => {
        return {
            elem: 'image'
        }
    }),

    elem('image')(
        tag()('img'),

        addAttrs()(_ => {
            return {
                src: '/static/images/logo_new.png'
            };
        })
    )
)
