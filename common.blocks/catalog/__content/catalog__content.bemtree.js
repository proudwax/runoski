block('catalog').elem('content')(
    content()(function() {
        var data = this.ctx.data || {};

        var items = [1,2,3,4,5].map(function (item) {
            return [
                {
                    elem: 'item',
                    content: [
                        {
                            block: 'catalog-item'
                        }
                    ]
                }
            ];
        });
    
        return data.status || items;
    })
)

