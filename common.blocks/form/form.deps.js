([
    {
        shouldDeps: [
            { elem: 'message' },
            'jquery',
            'form-field',
            'button',
            {
                block: 'spin',
                mods: {
                    theme: 'islands',
                    size: 'l',
                    visible: true
                }
            }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'spin', tech: 'bemhtml' },
            // { elem: 'message', tech: ['bemhtml', 'bemtree'] }
		]
    }
])
