block('order').content()(function() {
    return [
        {
            block: 'modal',
            mix: { block: this.block, elem: 'modal' },
            mods: {
                autoclosable: true,
                theme: 'islands'
            },
            content: 'some information'
        }
    ]
});
