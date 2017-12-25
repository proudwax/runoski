block('form').mod('order', true).content()(function() {
    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: 'Оформить заказ'
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'form-field',
                    mods: { type: 'input', required: true },
                    content: [
                        {
                            elem: 'label',
                            content: 'Name'
                        },
                        {
                            elem: 'control',
                            content: [
                                {
                                    block: 'input',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        width: 'available',
                                        'has-clear': true
                                    },
                                    name: 'name',
                                    placeholder: 'Name', 
                                    autocomplete: false
                                }
                            ] 
                        }
                    ]
                },
                {
                    block: 'form-field',
                    mods: { type: 'input', required: true, validate: 'phone' },
                    js: { pattern: '+7(000)000-00-00' },
                    content: [
                        {
                            elem: 'label',
                            content: 'Phone'
                        },
                        {
                            elem: 'control',
                            content: [
                                {
                                    block: 'input',
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        width: 'available',
                                        'has-clear': true
                                    },
                                    name: 'phone',
                                    placeholder: 'Phone',
                                    autocomplete: false
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'submit'
                    },
                    text: 'Отправить'
                }
            ]
        }
    ];
});
