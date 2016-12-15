block('root').replace()(function() {
    return {
        block: 'page',
        title: 'TODO',
        favicon: '/favicon.ico',
        styles: [
            { elem: 'css', url: 'main.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'main.min.js' }
        ],
        head: [
            { elem: 'meta', attrs: { name: 'description', content: '' } },
            { elem: 'meta', attrs: { name: 'keywords', content: '' } },
            { elem: 'meta', attrs: { property: 'og:title', content: 'og.title' } },
            { elem: 'meta', attrs: { property: 'og:url', content: 'og.url' } },
            { elem: 'meta', attrs: { property: 'og:site_name', content: 'og.siteName' } },
            { elem: 'meta', attrs: { property: 'og:locale', content: 'og.locale' } },
            { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
            { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
        ],
        mods: { theme: 'ya' }
    };
});
