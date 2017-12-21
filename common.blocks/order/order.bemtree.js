block('order').content()(function() {
    return [
        {
            block: 'modal',
            mix: { block: this.block, elem: 'modal' },
            mods: {
                autoclosable: true,
                theme: 'islands',
                'has-close': true
            },
            content: [
                {
                    block: 'form',
                    mods: { order: true },
                    method: 'post',
                    action: '#send'
                }
            ]
        }
    ]
});
