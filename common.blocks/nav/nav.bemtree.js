block('nav').content()(function() {
    return [
        {
            elem: 'list',
            content: [
                {
                    elem: 'list-item',
                    url: '#1',
                    content: 'Каталог'
                },
                {
                    elem: 'list-item',
                    url: '#2',
                    content: 'Контакты'
                },
                {
                    elem: 'list-item',
                    url: '#3',
                    content: 'Доставка'
                }
            ]
        },
        {
            elem: 'burger'
        }
    ];
});
