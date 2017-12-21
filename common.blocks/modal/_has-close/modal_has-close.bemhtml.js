block('modal').mod('has-close', true)(
    elem('content').content()(
        (node, json) => {
            return [
                {
                    block: 'link',
                    mix: { block: node.block, elem: 'close' },
                    mods: { pseudo: true },
                },
                applyNext()
            ];
        }
    )
);
