block('catalog-item').content()(function() {
    return [
        {
            elem: 'image',
            content: [
                {
                    block: 'image',
                    url: 'https://носки-ивтекс.рф/i/products//19038/muzhskie_noski_teplye_pobeda_a_525_bambuk_medium.jpg'
                }
            ]
        },
        {
            elem: 'container',
            content: [
                {
                    elem: 'title',
                    content: 'Носки мужские'
                },
                {
                    elem: 'details',
                    content: [
                        {
                            elem: 'details-label',
                            content: 'Модель'
                        },
                        {
                            elem: 'details-value',
                            content: 'A-8889-1'
                        },
                        {
                            elem: 'details-label',
                            content: 'Марка'
                        },
                        {
                            elem: 'details-value',
                            content: 'BUBAH'
                        },
                        {
                            elem: 'details-label',
                            content: 'Размер'
                        },
                        {
                            elem: 'details-value',
                            content: '42-48/28-32см'
                        },
                        {
                            elem: 'details-label',
                            content: 'Состав'
                        },
                        {
                            elem: 'details-value',
                            content: '80%бамбук 15%полиамид 5%эластан'
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            elem: 'price',
                            content: '15 руб./1 шт.'
                        },
                        {
                            elem: 'action',
                            content: [
                                {
                                    block: 'button',
                                    mix: [{ block: 'order', js: { id: 'order' } }, { block: 'order', elem: 'link' }, { block: 'link', js: true, mods: { pseudo: true } }],
                                    mods: {
                                        theme: 'islands',
                                        size: 'l',
                                        type: 'link',
                                        view: 'action'
                                    },
                                    url: '/order',
                                    text: 'Купить'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
});
