# context API的三个概念
## React.createContext
```js
const MyContext = React.createContext(defaultValue);
```
* 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效
## Context.Provider
```js
<MyContext.Provider value={/* 某个值 */}>
```
* 通过非state的属性赋值的value，为啥没变化
> Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
> 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。不受制于 shouldComponentUpdate
> 因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例子，当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 value 属性总是被赋值为新的对象. 为了防止这种情况，将 value 状态提升到父节点的 state 里

## Class.contextType


## Context.Consumer


# 用途
* 比如H5内嵌页那种小玩意，使用context当store，顺便把change或者update方法塞进去
```js
<MyContext.Provider value={{
    store: ...,
    change: ...,
    update: ...,
}}>
    ...
</MyContext.Provider>
```

