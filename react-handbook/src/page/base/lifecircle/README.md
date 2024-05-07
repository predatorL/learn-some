# 组件生命周期概述
1. 初始化
> 在组件初始化阶段会执行
* constructor(props)
* static getDerivedStateFromProps()
* componentWillMount() / UNSAFE_componentWillMount() 
    * 函数可能会被废弃，所以尽量避免在新的代码中使用
* render()
* componentDidMount()

2. 更新阶段
> props或state的改变可能会引起组件的更新，组件重新渲染的过程中会调用以下方法
* static getDerivedStateFromProps(nextProps, prevState)
    - 使用方法: 不需调用, 直接返回新状态即可，若无则返回null(返回值的机制和使用 setState 的机制是类似的)
    - 无法调用this
* componentWillReceiveProps() / UNSAFE_componentWillReceiveProps() 
* componentWillUpdate() / UNSAFE_componentWillUpdate()
* shouldComponentUpdate()
* render()
* getSnapshotBeforeUpdate()
    - 在更新之前被调用 例如，在DOM被更新之前
    - 此生命周期的返回值将作为第三个参数传递给componentDidUpdate
* componentDidUpdate()

3. 卸载阶段
* componentWillUnmount()

4. 错误处理
* componentDidCatch()


#　生命周期变更
## react17 中即将废除的生命周期
> 原因: 这三个生命周期函数容易被误解并滥用，可能会对异步渲染造成潜在的问题
* componentWillMount
* componentWillReceiveProps
* componentWillUpdate 

## react17 新引入的生命周期
> 引入了两个新的生命周期函数来替代这三个生命周期函数
* getDerivedStateFromProps
* getSnapshotBeforeUpdate