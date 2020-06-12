// 配置抽象路径和需要的模板引擎数据

// 抽象路径配置
const loadConfig = {
    src: 'src',
    dest: 'dist',
    temp: '.tmp', // .开头的目录属于隐藏目录，临时文件可以放到隐藏目录中
    public: 'public',
    paths: {
        styles: 'assets/styles/*.scss',
        scripts: 'assets/scripts/*.js',
        pages: '*.html',
        images: 'assets/images/**',
        fonts: 'assets/fonts/**',
    }
}


// 模板引擎数据
const loadData = {
    menus: [
        {
        name: 'Home',
        icon: 'aperture',
        link: 'index.html'
        },
        {
        name: 'Features',
        link: 'features.html'
        },
        {
        name: 'About',
        link: 'about.html'
        },
        {
        name: 'Contact',
        link: '#',
        children: [
            {
            name: 'Twitter',
            link: 'https://twitter.com/w_zce'
            },
            {
            name: 'About',
            link: 'https://weibo.com/zceme'
            },
            {
            name: 'divider'
            },
            {
            name: 'About',
            link: 'https://github.com/zce'
            }
        ]
        }
    ],
    pkg: require('./package.json'),
    date: new Date()
};


module.exports = {
    loadConfig,
    loadData
}