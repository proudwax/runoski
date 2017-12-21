({
    shouldDeps: [
        {
            block: 'input',
            mods: {
                theme: 'islands',
                size: 'l',
                width: 'available',
                'has-clear': true
            }
        },
        {
            block: 'button',
            mods: {
                theme: 'islands',
                size: 'm',
                type: 'submit'
            }
        },
        { block: 'form-field', mods: { type: 'input', required: true, validate: 'phone' } }
    ]
})
