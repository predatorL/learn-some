function create_children(module_name, children) {
    return children.map(item => {
        return {
            path: item,
            name: `${module_name}_${item}`,
            component: resolve => require([`@biz/${module_name}/${item}`], resolve)
        }
    })
}
export const create_route = ({ module_name, children }) => {
    return {
        path: module_name,
        name: module_name,
        component: resolve => require([`@biz/${module_name}/index`], resolve),
        children: create_children(module_name, children)
    }
}
