block('header').content()(function() {
    return [
        {
            elem: 'top',
            content: [
                {
                    elem: 'logo',
                    content: [
                        {
                            block: 'logo'
                        }
                    ]
                },
                {
                    elem: 'contacts',
                    content: [
                        {
                            block: 'contacts'
                        }
                    ]
                }
            ]
        },
        {
            elem: 'nav',
            content: [
                {
                    block: 'nav'
                }
            ]
        }
    ];
});
