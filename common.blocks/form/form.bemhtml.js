block('form')(
    tag()('form'),

    addAttrs()((node, json) => {
        return {
            method: json.method || 'get',
            action: json.action
        }
    }),

    elem('title')(
        tag()('h3')
    )
);
