block('form').elem('message')(
    content()(function(node) {
        var data = this.ctx.data || {};
        console.log(node);
    
        return [
            {
                elem: 'title',
                content: data.title
            },
            {
                elem: 'content',
                content: data.content
            }
        ];
    })
)
