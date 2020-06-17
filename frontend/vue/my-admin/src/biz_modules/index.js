import { create_route } from '@/utils/route'
import dashboard from './dashboard/route'
import weather from './weather/route'
import wechat from './wechat/route'
import zhihu from './zhihu/route'
import system_settings from './system_settings/route'

const modules = [weather, wechat, zhihu, system_settings].map(create_route)

export default [
    dashboard,
    ...modules,
    { path: '/', redirect: { name: 'dashboard' } },
    { path: '*', redirect: { name: 'dashboard' } }
]
