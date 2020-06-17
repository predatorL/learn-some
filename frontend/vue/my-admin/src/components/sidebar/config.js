const dashboard = {
    name: 'dashboard',
    title: 'Dashboard',
    icon: 'dashboard'
}
const weather = {
    name: 'weather',
    title: '天气质量监控',
    icon: 'cube',
    subs: [['China', '中国天气']]
}

const zhihu = {
    name: 'zhihu',
    title: '知乎信息收集',
    icon: 'cube',
    subs: [['daily_list', '日报列表']]
}
const wechat = {
    name: 'wechat',
    title: '微信信息收集',
    icon: 'cube',
    subs: [['news_list', '新闻列表']]
}
const system_settings = {
    name: 'system_settings',
    title: '系统管理',
    icon: 'cube',
    subs: [['account_list', '账号管理']]
}

export default [dashboard, weather, wechat, zhihu, system_settings]
