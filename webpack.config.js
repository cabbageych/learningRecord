const path = require('path');//引入插件
const HtmlwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoader = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');
const CompressionWebpackPlugin = require('compression-webpack-plugin');



module.exports = {
    entry: ['./app/js/main.js'],
    output: {
        //[name]意思是打包后文件名和入口文件一致        //[hash]用来添加一个hash串        
        filename: '[name].[hash:4].js',        //打包后存放在根目录dist文件夹下面        
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192, // 小于8k的图片自动转成base64格式                    
                        outputPath: 'images/' //图片打包后的文件夹                
                    }
                }]
            },
            { test: /\.(htm|html)$/, use: 'html-withimg-loader' },
            { test: /\.(eot|ttf|woff|svg)$/, use: 'file-loader' },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    plugins: [
        //通过new一个类来使用刚才引入的插件 
        //开启gzip压缩     
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',// 目标文件名
            algorithm: 'gzip',// 使用gzip压缩
            test: new RegExp(
                '\\.(js|css)$' // 压缩 js 与 css
            ),
            threshold: 10240,// 资源文件大于10240B=10kB时会被压缩
            minRatio: 0.8 // 最小压缩比达到0.8时才会被压缩
        }),


        new HtmlwebpackPlugin({
            template: './app/views/index.html', //模板文件的位置       
        }),
        new CleanWebpackPlugin(),//指定需要清空的文件夹 
        new MiniCssExtractPlugin({
            //分离后的css文件名            
            filename: 'style.css',
        }),
        new VueLoader(),
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包重复出现的代码
                vendor: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'vendor'
                },
                //打包第三方类库
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: Infinity
                }
            }
        }),
        new SpritesmithPlugin({
            // 目标小图标
            src: {
                cwd: path.resolve(__dirname, './app/img/icons/'),
                glob: '*.png'
            },
            // 输出雪碧图文件及样式文件
            target: {
                image: path.resolve(__dirname, './app/css/sprites-generated.png'),
                css: path.resolve(__dirname, './app/css/sprites-generated.css')
            },
            // 样式文件中调用雪碧图地址写法
            apiOptions: {
                cssImageRef: './sprites-generated.png'
            },

            spritesmithOptions: {
                algorithm: 'top-down'
            }
        })
    ],


    devServer: {
        contentBase: './dist',
        host: 'localhost',      // 默认是localhost        
        port: 3000,             // 端口号        
        open: true,             // 自动打开浏览器    
    },
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    },
    mode: "production"
}