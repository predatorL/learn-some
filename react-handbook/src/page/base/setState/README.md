# 异步
> 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
> 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
> 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数
# 合并
> State 的更新会被合并. 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state
> 这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments
