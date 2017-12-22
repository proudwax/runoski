block('form').elem('message').content()(function(node) {
    return [
        {
            elem: 'title',
            content: node.title
        },
        {
            elem: 'content',
            content: node.content
        }
    ];
});
