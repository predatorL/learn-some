import conf from '@/page-conf'

const routes = [
  {
    path: '/',
    redirect: '/demo1'
  }
]
conf.forEach(item => {
  const temp = item.subs.map(({ route }) => {
      const _the = '/' + route
      return {
          path: _the,
          name: route,
          component(resolve) {
              return require(['@/demos' + _the], resolve)
          }
      }
  })
  routes.push(...temp)
})

export default {
  routes
}
