const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    devServer: {
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'http://106.55.49.50/',  // 后台接口域名
                ws: false,        //如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  //是否跨域
                pathRewrite:{
                    // '^/api':''
                }
        }
        },
    },

    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets',resolve('src/assets'))
            .set('@network',resolve('src/network'))
            .set('@assetsImg',resolve('src/assets/img'))
            .set('@views',resolve('src/views'))
            .set('@components',resolve('src/components'))
            .set('@mutations',resolve('src/store/mutations-types.js'))
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",
                        viewportWidth: 375,
                        unitPrecision: 3,
                        propList: [
                            "*"
                        ],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                ]
            }
        }
    },

}

