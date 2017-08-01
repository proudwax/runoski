block('page').content()(function() {
    return [
        {
            block: 'form-request',
            title: 'Request success',
            action: '/resp-success.json',
            mix: { block: 'content', mods: { form: 'request' } }
        },
        {
            block: 'form-request',
            title: 'Request error',
            action: '/resp-error.json',
            mix: { block: 'content', mods: { form: 'request' } }
        },
        {
            block: 'form-request',
            title: 'Request progress',
            action: '/resp-progress.json',
            mix: { block: 'content', mods: { form: 'request' } }
        }
    ];
});
