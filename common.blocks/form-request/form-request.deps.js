({
    shouldDeps: [
        { block: 'form', mods: { theme: 'islands', 'has-validation': true, async: true } },
        { block: 'form-field', mods: { type: 'input', required: true, message: 'popup', validate: ['phone', 'email-list', 'pattern', 'phone-sum-numb'] } },
        { block: 'button', mods: { theme: 'islands', size: 'l', type: 'submit', view : 'action' } },
        { block: 'input', mods: { theme: 'islands', size: 'l', 'has-clear': true, width: 'available' } },
        { block: 'popup', mods: { theme: 'islands' } },
        'label',
        'mq'
    ]
})
