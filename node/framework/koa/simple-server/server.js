const Koa = require('koa')
const app = new Koa()
const router = require('./router')

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())



app.listen(3001)
