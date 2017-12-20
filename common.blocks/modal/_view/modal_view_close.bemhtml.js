block('modal').mod('has', 'close')(
    elem('content').content()(
        (node, json) => {
            return [
                {
                    elem: 'close'
                },
                applyNext()
            ];
        }
    )
);
