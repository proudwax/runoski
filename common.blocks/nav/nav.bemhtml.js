block('nav')(
    tag()('nav'),

    addAttrs()(_ => {
        return {
            role: 'navigation'
        };
    }),

    elem('list-item')(
        tag()('a'),
        
        addAttrs()((node, json) => {
            return {
                href: json.url
            };
        })
    )
)
