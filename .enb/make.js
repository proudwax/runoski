var techs = {
    // essential
    fileProvider: require('enb/techs/file-provider'),
    fileMerge: require('enb/techs/file-merge'),

    // optimization
    borschik: require('enb-borschik/techs/borschik'),

    // css
    postcss: require('enb-postcss/techs/enb-postcss'),
    postcssPlugins: [
        require('postcss-import')(),
        require('postcss-each'),
        require('postcss-for'),
        require('postcss-simple-vars')(),
        require('postcss-calc')(),
        require('postcss-nested'),
        require('rebem-css'),
        require('postcss-url')({ url: 'inline' }),
        require('autoprefixer')({
            browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
        }),
        require('postcss-reporter')()
    ],

    // js
    browserJs: require('enb-js/techs/browser-js'),

    // bemtree
    bemtree: require('enb-bemxjst/techs/bemtree'),

    // bemhtml
    bemhtml: require('enb-bemxjst/techs/bemhtml'),
    bemtreeToHtml: require('./techs/bemtree-to-html'),

    // postcss
    postcss: {
        postcss: require('enb-postcss/techs/enb-postcss'),
        plugins: function() {
            return [
                require('postcss-import')(),
                require('postcss-each'),
                require('postcss-for'),
                require('postcss-simple-vars')(),
                require('postcss-calc')(),
                require('postcss-nested'),
                require('rebem-css'),
                require('postcss-url')({ url: 'rebase' }),
                require('autoprefixer')([ 'ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%' ])
            ];
        }
    }
    },
    enbBemTechs = require('enb-bem-techs'),
    levels = [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        { path: 'libs/bem-components/design/common.blocks', check: false },
        { path: 'libs/bem-components/design/desktop.blocks', check: false },
        'common.blocks',
        'desktop.blocks'
    ];

module.exports = function(config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, { levels: levels }],
            [techs.fileProvider, { target: '?.bemdecl.js' }],
            [enbBemTechs.deps],
            [enbBemTechs.files],

            // css
            [techs.postcss, {
                target: '?.css',
                plugins: techs.postcssPlugins
            }],

            // postcss & css
            // [techs.postcss.postcss, {
            //     target: '?.this-post.css',
            //     sourceSuffixes : ['post.css', 'css', 'ie.post.css', 'ie.css'],
            //     plugins : techs.postcss.plugins()
            // }],

            // merge stylus & postcss & css
            // [techs.fileMerge, {
            //     target: '?.no-grid.css',
            //     sources: ['?.this-post.css', '?.this-stylus.css']
            // }],

            // sharps
            [require('sharps').enb, {
                config: {
                    maxWidth: '1200px',
                    gutter: '10px',
                    flex: 'flex'
                },
                source: '?.no-grid.css' // there is the source
            }],

            // bemtree
            [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

            // bemhtml
            [techs.bemhtml, {
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                forceBaseTemplates: true,
                engineOptions : { elemJsInstances : true }
            }],

            // html
            [techs.bemtreeToHtml],

            /* My code yazvyazda */
            // client bemtree
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemtree.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemtree'
            }],
            [enbBemTechs.deps, {
                target: '?.bemtree.deps.js',
                bemdeclFile: '?.bemtree.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemtree.deps.js',
                filesTarget: '?.bemtree.files',
                dirsTarget: '?.bemtree.dirs'
            }],
            [techs.bemtree, {
                target: '?.browser.bemtree.js',
                filesTarget: '?.bemtree.files',
                sourceSuffixes: ['bemtree', 'bemtree.js']
            }],
            /* /My code yazvyazda */

            // client bemhtml
            [enbBemTechs.depsByTechToBemdecl, {
                target: '?.bemhtml.bemdecl.js',
                sourceTech: 'js',
                destTech: 'bemhtml'
            }],
            [enbBemTechs.deps, {
                target: '?.bemhtml.deps.js',
                bemdeclFile: '?.bemhtml.bemdecl.js'
            }],
            [enbBemTechs.files, {
                depsFile: '?.bemhtml.deps.js',
                filesTarget: '?.bemhtml.files',
                dirsTarget: '?.bemhtml.dirs'
            }],
            [techs.bemhtml, {
                target: '?.browser.bemhtml.js',
                filesTarget: '?.bemhtml.files',
                sourceSuffixes: ['bemhtml', 'bemhtml.js'],
                elemJsInstances : true
            }],

            // js
            [techs.browserJs, { includeYM: true }],
            [techs.fileMerge, {
                target: '?.js',
                sources: ['?.browser.js', '?.browser.bemhtml.js', '?.browser.bemtree.js']
            }],

            // borschik
            [techs.borschik, { source: '?.js', target: '?.min.js', minify: isProd }],
            [techs.borschik, { source: '?.css', target: '?.min.css', minify: isProd }]
        ]);

        nodeConfig.addTargets(['?.bemtree.js', '?.html', '?.min.css', '?.min.js']);
    });
};
