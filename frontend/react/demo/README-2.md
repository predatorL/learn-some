### 多页应用配置
[博客链接](https://segmentfault.com/a/1190000012772616)
- 修改entry
```
index: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('react-error-overlay'),
    paths.appSrc + "/index.js",

]
```
- 修改plugins中的HtmlWebpackPlugin
```
new HtmlWebpackPlugin({
    inject: true,
    chunks: ['index'],
    template: paths.appHtml,
}),
```
- webpackDevServer.config.js中修改historyApiFallback
```
new HtmlWebpackPlugin({
    inject: true,
    chunks: ['index'],
    template: paths.appHtml,
}),
```

