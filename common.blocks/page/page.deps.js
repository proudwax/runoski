({
    mustDeps: [
        { block: 'fonts', mods: { 'system-ui': true } },
    ],
    shouldDeps: [
        'form-request',
        { block: 'content', mods: { form: 'request' } }
    ]
})
