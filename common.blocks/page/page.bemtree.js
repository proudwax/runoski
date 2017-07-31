block('page').content()(function() {
    return {
        block: 'content',
        mods: { form: 'request' },
        content: [
            {
                block: 'form-request'
            }
        ]
    };
});
