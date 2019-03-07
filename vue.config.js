
const md = require('markdown-it')();
const cheerio = require('cheerio');
const MarkdownItContainer = require('markdown-it-container');
function wrapCustomClass(render) {
    return function(...args) {
        return render(...args)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
}
function convertHtml(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

const striptags = {
    strip: function(str, tags) {
        const $ = cheerio.load(str, { decodeEntities: false });
        if (!tags || tags.length === 0) {
            return str;
        }
        tags = !Array.isArray(tags) ? [tags] : tags;
        let len = tags.length;

        while (len--) {
            $(tags[len]).remove();
        }
        return $.html();
    }
};


module.exports = {
// 修改 src 为 examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // 强制内联CSS
    css: {
        extract: false
    },
    baseUrl: process.env.NODE_ENV === 'production' ? '/bt-ui' : '/',
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('eslint')
            .exclude
            .add('/lib')
            .end()
            .exclude
            .add('/examples/docs')
            .end();
        config.module
            .rule('js')
            .include
            .add('/packages')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options;
            });
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preprocess: (MarkdownIt, source) => {
                    MarkdownIt.renderer.rules.table_open = function() {
                        return '<table class="table">';
                    };
                    MarkdownIt.renderer.rules.fence = wrapCustomClass(MarkdownIt.renderer.rules.fence);
                    return source;
                },
                use: [
                    [MarkdownItContainer, 'demo', {
                        // 用于校验包含demo的代码块
                        // validate: params => {
                        //     const res =  params.trim().match(/^demo\s+(.*)$/);
                        //     console.log('res', res);
                        //     return res;
                        // },
                        render: (tokens, idx) => {
                            const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                            if (tokens[idx].nesting === 1) {

                                const description = (m && m.length > 1) ? m[1] : '';
                                const content = tokens[idx + 1].content;

                                // 编译成html
                                const html = convertHtml(striptags.strip(content, 'script'));
                                let descriptionHTML = description ? md.render(description) : '';

                                return `<demo-block>
                                            <div slot="source" class="source">${html}</div>
                                            ${descriptionHTML}
                                            <div slot="highlight" class="highlight">`;
                            }

                            return '</div></demo-block>\n';
                        }
                    }]
                ]
            });
    }
};
