block('catalog').elem('content')(
    content()(function() {
        var data = this.ctx.data || {};

        if (Object.keys(data).length != 0) {
            var items = data.map(function (item) {
                return {
                    elem: 'item',
                    cotent: {
                        block: 'catalog-item',
                        data: item
                    }
                }
            });
            return items;
        }

        return {
            elem: 'default',
            content: 'Загрузка'
        };
    })
)

