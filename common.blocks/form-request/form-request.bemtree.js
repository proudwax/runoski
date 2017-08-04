block('form-request').content()(function() {
    var action = this.ctx.action,
        title = this.ctx.title;

    var fields = [
        { label: 'Name', type: 'input', val: 'Test test Test-Test', name: 'Name', placeholder: 'Your Name', required: 'Required field', validate: 'pattern', pattern: { pattern: { value: '^([A-Za-zА-Яа-я]{3,})\\s([A-Za-zА-Яа-я]{3,})\\s([A-Za-zА-Яа-я-]{3,})\\s*$', message: 'Incorrect  name (3 words)' } } },
        { label: 'Phone', type: 'input', val: '+7111111111', name: 'Phone', placeholder: 'Your phone', required: 'Required field', validate: 'phone', pattern: { phone: { mask: '+7(000)000-00-00' , max: 30, message: 'Incorrect phone (sum of phone numbers max 30)' } } },
        { label: 'Email', type: 'input', val: 'test@ya.ru', name: 'Email', placeholder: 'Your Email', required: 'Required field', validate: 'email-list', pattern: { 'email-list': { 'domains-list': ['ya.ru', 'yandex.ru', 'yandex.ua', 'yandex.by', 'yandex.kz', 'yandex.com'], message: 'Incorrect Email' } } }
    ];

    var bemjson = fields.map(function (item) {
        return {
            block: 'form-field',
            name: item.name,
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
                pattern: item.pattern.pattern ? item.pattern.pattern : undefined,
                'email-list': item.pattern['email-list'] ? item.pattern['email-list'] : undefined,
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
                    // name: item.name,
                    val: item.val != '' ? item.val : undefined,
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
        action: action,
        method: 'GET',
        id: 'myForm',
        content: [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: title
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
                        elem: 'action',
                        content: [
                            {
                                block: 'button',
                                mods: { theme: 'islands', size: 'l', type: 'submit', view : 'action' },
                                text: 'Send'
                            }
                        ]
                    }
                ]
            }
        ]
    };
});
