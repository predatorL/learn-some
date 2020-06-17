export default {
    path: 'dashboard',
    meta: {},
    component: resolve => require(['./index'], resolve),
    children: [
        {
            path: 'index',
            name: 'dashboard',
            component: resolve => require(['./main'], resolve)
        }
    ]
}
