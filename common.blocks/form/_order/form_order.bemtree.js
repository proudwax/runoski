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
                    mods: { required: true, validate: 'phone' },
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
                                    placeholder: 'Phone'
                                }
                            ]    
                        }
                    ]
                },
                {
                    block: 'form-field',
                    mods: { required: true },
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
                                    placeholder: 'Name' 
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
