block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'catalog',
            mix: { block: 'content' }
        },
        {
            block: 'footer'
        }
    ];
});
