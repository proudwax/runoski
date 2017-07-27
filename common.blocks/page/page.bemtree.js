block('page').content()(function() {
    return {
        block: 'form',
        content: [
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
                content: []
            },
            {
                elem: 'footer',
                content: [
                    {
                        elem: 'action',
                        content: [
                            {
                                block: 'button',
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
            }
        ]
    };
});
