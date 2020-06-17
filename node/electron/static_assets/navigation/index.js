const tpl = `
<el-menu :default-active="activeIndex" mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item v-for="(item, index) in navs" :index="item">{{item.title}}({{item.name}})</el-menu-item>
</el-menu>
`

module.exports = () => {
    return {
        el: '#nav',
        template: tpl,
        methods: {
            handleSelect({name, title}) {
                document.title = [title, name].join('---')
                const currModule = require(myUtils.getModulePath(name))
                console.log(currModule)
                myUtils.mountPage(name, currModule)
            }
        },
        mounted() {},
        data() {
            return {
                activeIndex: 1,
                navs: [
                    {title: '事件', name: 'event'},
                    {title: '进程', name: 'process'},
                    {title: '网络', name: 'net'},
                ]
            }
        }
    }
}
