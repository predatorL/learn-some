> 在 React 中，只要执行了 setState 方法，就一定会触发 render 函数执行；组件的 props 改变了，不一定触发 render 函数的执行，除非 props 的值来自于父组件或者祖先组件的 state，在这种情况下，组件的 props 改变，也就意味着父组件或者祖先组件的 state 发生了改变，也就是父组件或者祖先组件执行了 setState 方法；那么可以总结出，render 函数的执行时机就是 setState 方法的执行。
> 另，render 函数执行并不一定意味着发生 DOM 操作，render 函数执行只是返回虚拟 DOM，需要通过比较新旧虚拟 DOM 来决定是否发生 DOM 操作，新旧虚拟 DOM 的比较，就涉及 diff 算法了

> setState传入一个空对象也会触发render函数被调用
