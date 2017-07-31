block('form-request').content()(function() {

    var fields = [
        { label: 'Name', type: 'input', name: 'Name', placeholder: 'Your Name', required: 'Required field', validate: 'pattern', pattern: { pattern: { value: '[a-zа-я_-]{3,}', message: 'Introduce correct  name' } } },
        { label: 'Phone', type: 'input', name: 'Phone', placeholder: 'Your phone', required: 'Required field', validate: 'phone', pattern: { phone: { mask: '+7(000)000-00-00', message: 'Introduce correct phone' } } },
        { label: 'Email', type: 'input', name: 'Email', placeholder: 'Your Email', required: 'Required field', validate: 'email', pattern: { email: { message: 'Introduce correct Email' } } }
    ];

    var bemjson = fields.map(function (item) {
        return {
            block: 'form-field',
            name: item.type,
            mods : {
                theme: 'islands',
                type: item.type,
                required: true,
                validate: item.validate,
                message: 'popup',
                size: 'l'
            },
            directions : ['top-left'],
            js: {
                pattern: item.pattern.pattern ? item.pattern.pattern : false,
                email: item.pattern.email ? item.pattern.email : false,
                phone: item.pattern.phone ? item.pattern.phone : undefined,
                required: {
                    message: item.required
               }
            },
            content : [
                {
                    block: 'label',
                    mods: {
                        size: 'l',
                        required: true,
                    },
                    content: item.label
                },
                {
                    block: item.type,
                    mods: {
                        theme: 'islands',
                        'has-clear': true,
                        width: 'available',
                        size : 'l'
                    },
                    name: item.name,
                    autocomplete: false,
                    placeholder: item.placeholder
                }
            ]
        }
    });

    return {
        block: 'form',
        mods: {
            theme : 'islands',
            'has-validation' : true,
            async: true
        },
        action: '/server.txt',
        method: 'GET',
        id: 'myForm',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Request'
                    },
                    {
                        elem: 'desc',
                        content: 'request form'
                    }
                ]
            },
            {
                elem: 'content',
                content: bemjson
            },
            {
                elem: 'footer',
                content: [
                    {
                        block: 'button',
                        mods: { theme: 'islands', size: 'l', type: 'submit', view : 'action' },
                        text: 'Send'
                    }
                ]
            }
        ]
    };
});
