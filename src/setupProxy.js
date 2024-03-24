// const proxy=require('http-proxy-middleware') //低版本的http-proxy-middleware的引入方式，当前安装的2.0.6版本不适用
const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/accountLogin', {
            target: 'http://100.65.12.221/users/login-with-account', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {'^/accountLogin': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
        proxy('/accountRegister', {
            target: 'http://100.65.12.221/users/register-with-account', //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: {'^/accountRegister': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
    )
}
