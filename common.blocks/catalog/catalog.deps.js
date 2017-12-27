([
    {
        mustDeps: [
        ],
        shouldDeps: [
            { elem: 'content' },
            { elem: 'footer' },
            'order'
        ]
    },
    {
        tech: 'js',
        mustDeps: [
            { block: 'spin', tech: 'bemhtml' },
            { block: 'catalog', tech: 'bemhtml' },
            { block: 'catalog', tech: 'bemtree' }
        ]
    }
])
