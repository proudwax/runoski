([
    {
        shouldDeps: [
            'image',
            'mq',
            {
                block: 'button',
                mods: {
                    theme: 'islands',
                    size: 'l',
                    type: 'link',
                    view: 'action',
                    disabled: true
                }
            }
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'catalog-item', tech: 'bemhtml' },
            { block: 'catalog-item', tech: 'bemtree' }
        ]
    }
])
