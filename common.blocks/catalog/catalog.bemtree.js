block('catalog')(
    content()(function() {
        return [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: 'Носки'
                    }
                ]
            },
            {
                elem: 'content'
            },
            {
                elem: 'footer'
            },
            {
                block: 'order'
            }
        ];
    })
)
