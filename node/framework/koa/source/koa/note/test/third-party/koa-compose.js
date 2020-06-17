// https://segmentfault.com/a/1190000013447551
const compose = require('koa-compose');

function one(ctx,next){
    console.log('第一个');
    next(); // 控制权交到下一个中间件（实际上是可以执行下一个函数），
}
function two(ctx,next){
    console.log('第二个');
    next();
}
function three(ctx,next){
    console.log('第三个');
    next();
}
// 传入中间件函数组成的数组队列，合并成一个中间件函数
const middlewares = compose([one, two, three]);
// 执行中间件函数,函数执行后返回的是Promise对象
middlewares().then(function (){
    console.log('队列执行完毕');
})
