block('catalog-item').content()(function() {
    var data = this.ctx.data || {};

    return [
        {
            elem: 'image',
            content: [
                {
                    block: 'image',
                    url: data.img["10000x150"]
                }
            ]
        },
        {
            elem: 'container',
            content: [
                {
                    elem: 'title',
                    content: data.brand.name + ' ' + data.model.name
                },
                {
                    elem: 'details',
                    content: [
                        {
                            elem: 'details-label',
                            content: 'Двигатель'
                        },
                        {
                            elem: 'details-value',
                            content: data.engine.volume.short + ' ' + data.engine.type
                        },
                        {
                            elem: 'details-label',
                            content: 'Коробка'
                        },
                        {
                            elem: 'details-value',
                            content: data.gearbox.name
                        },
                        {
                            elem: 'details-label',
                            content: 'Год'
                        },
                        {
                            elem: 'details-value',
                            content: data.year
                        },
                        {
                            elem: 'details-label',
                            content: 'Пробег'
                        },
                        {
                            elem: 'details-value',
                            content: data.mileage
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            elem: 'price',
                            content: data.price.ust
                        },
                        {
                            elem: 'action',
                            content: [
                                {
                                    block: 'button',
                                    mix: [{ block: 'order', js: { uniqId: 'order' } }, { block: 'order', elem: 'link', js: { model: data.id.sap } }],
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
