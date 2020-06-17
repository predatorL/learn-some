# events (事件)

## 简单创建
```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('触发了一个事件！');
});
myEmitter.emit('event');
```
## 监听器传入参数
myEmitter.emit('event', a, b, c);

## this
当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter. ES6 的箭头函数作为监听器会改变这个行为
