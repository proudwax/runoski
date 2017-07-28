block('form').content()(function() {
    return [
        {
            elem: 'header',
            content: [
                {
                    elem: 'title',
                    content: 'Request'
                }
            ]
        },
        {
            elem: 'content',
            content: [
                {
                    block: 'form-field',
                    mods: {
                        required: true
                    },
                    content: [
                        {
                            block: 'label',
                            content: 'Full Name'
                        },
                        {
                            block: 'input',
                            mods: {
                                theme: 'islands',
                                size: 'l',
                                width: 'available',
                                'has-clear': true
                            },
                            name: 'fio',
                            placeholder: 'Name'
                        }
                    ]
                },
                {
                    block: 'form-field',
                    mods: {
                        required: true
                    },
                    content: [
                        {
                            block: 'label',
                            content: 'Email'
                        },
                        {
                            block: 'input',
                            mods: {
                                theme: 'islands',
                                size: 'l',
                                width: 'available',
                                'has-clear': true
                            },
                            name: 'email',
                            placeholder: 'Email'
                        }
                    ]
                },
                {
                    block: 'form-field',
                    mods: {
                        required: true
                    },
                    content: [
                        {
                            block: 'label',
                            content: 'Phone'
                        },
                        {
                            block: 'input',
                            mods: {
                                theme: 'islands',
                                size: 'l',
                                width: 'available',
                                'has-clear': true
                            },
                            name: 'phone',
                            placeholder: 'Phone'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'footer',
            content: [
                {
                    elem: 'action',
                    content: [
                        {
                            block: 'button',
                            id: 'submitButton',
                            mods: {
                                theme: 'islands',
                                size: 'l',
                                view: 'action',
                                type: 'submit'
                            },
                            text: 'Submit'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'result',
            id: 'resultContainer'
        }
    ];
});
