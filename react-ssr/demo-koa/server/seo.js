export default (ctx, sourceStr) => {
    let _str = sourceStr;
    const {header} = ctx.request;
    let lang = header['accept-language'];
    let agent = header['user-agent'];
    // 根据 user-agent 判断客户端是chrome还是firefox，添加不同的用户辅助工具
    // 根据 accept-language 判断客户端的语言，配合各地运营调整seo策略
    let _title = ctx.request.url;
    if(lang.indexOf('zh-CN') !== -1) {
        _title += ` 简体中文`;
    }
    if(agent.indexOf('Chrome') !== -1) {
        _title += ` 谷歌浏览器`;
    }

    _str = _str.replace('<title>React App</title>', `<title>${_title}</title>`)

    return _str;
}
