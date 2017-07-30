({
    mustDeps: [
        'i-bem-dom'
    ],
    shouldDeps: [
        'mq',
        'form-field',
        'label',
        { block: 'input', mods: { theme: 'islands', size: 'l', width: 'available', 'has-clear': true } },
        { block: 'popup',  mods: { theme: 'islands', target: 'anchor', autoclosable: true } },
        { block: 'button', mods: { theme: 'islands', size: 'l', view: 'action', type: 'submit' } }
    ]
})
