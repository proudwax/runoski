block('catalog').elem('footer').content()(function() {
    return [
        {
            block: 'control-group',
            content: [
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm',
                        view: 'action'
                    },
                    url: '#1',
                    text: '1'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm'
                    },
                    url: '#2',
                    text: '2'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        type: 'link',
                        size: 'm'
                    },
                    url: '#3',
                    text: '3'
                }
            ]
        }
    ]
});
