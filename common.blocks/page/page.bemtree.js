block('page').content()(function() {
    return [
        {
            block: 'header'
        },
        {
            block: 'quote'
        },
        {
            block: 'service-tree'
        },
        {
            block: 'banner'
        },
        {
            block: 'promo-text'
        },
        {
            block: 'footer'
        },
        {
            block: 'request-form',
            content: [
                {
                    block: 'form-request'
                }
            ]
            // content: 'BEMDOM.blocks.button.liveBindTo(\'click\', function() { requestForm.show(); });'
        }
    ];
});
