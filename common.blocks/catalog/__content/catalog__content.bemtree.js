block('catalog').elem('content').content()(function() {
    var items = [1,2,3,4,5].map(function (item) {
        console.log(item);
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

    return items;
});
