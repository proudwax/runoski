block('form').elem('message')(
    content()(function () {
        return {
            elem: 'text',
            content: { html: applyNext() }
        }
    })
);
