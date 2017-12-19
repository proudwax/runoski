block('form-field')(
    def()((node ,json) => {
        let uniqID = node.generateId();
        return applyNext({ _blockID: uniqID });
    }),

    elem('control')(
        addAttrs()((node, json) => {
            let content = json.content[0];

            if (content.block == 'input') {
                node._blockID = content.id || node._blockID;
            }

            json.content[0].id = node._blockID;

            return applyNext();
        })
    ),

    elem('label')(
        tag()('label'),

        addAttrs()((node, json) => {
            return {
                for: node._blockID
            };
        })
    )
);
