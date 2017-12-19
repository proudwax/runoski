block('order').content()(function() {
    return [
        {
            block: 'modal',
            mix: { block: this.block, elem: 'modal' },
            mods: {
                autoclosable: true,
                theme: 'islands'
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
