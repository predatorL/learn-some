import React from 'react';

let store1 = {
    foo: 1,
    bar: []
}

let store2 = {
    foo: 1,
    name: 'xxx',
    data: []
}

const Mod1 = (props) => {
    const {store} = props;
    return (
        <div ref={props.getRef} className="mod1">
            store1
            <div>foo: {store.foo}</div>
        </div>
    )
}

 class Mod2 extends React.Component {

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render(){
        const {store} = this.props;
        return (
            <div className="mod1">
                store2
                <div>foo: {store.foo}</div>
            </div>
        )
    }
}


export default class extends React.Component {
    // 调用setState 来触发render
    mod1Change = () => {
        store1 = Object.assign(store1, {
            foo: store1.foo + 1
        });
        this.setState({})
        console.dir(this.mod1Ref, this.mod1Ref.render)
    }
    // 调用setState 来触发render
    mod2Change = () => {
        store2 = Object.assign(store2, {
            foo: store2.foo + 1
        });
        this.setState({})
        // this.forceUpdate()
        console.dir(this, this.refs, this.refs.mod2, )
        // this.refs.mod2.forceUpdate()
    }

    render() {
        return (
            <section>
                <header>普通的父传子props模式</header>
                <button onClick={this.mod1Change}>mod1+</button>
                <button onClick={this.mod2Change}>mod2+</button>
                <Mod1 getRef={ele => this.mod1Ref = ele} store={store1}/>
                <Mod2 ref="mod2" store={store2}/>
            </section>
        )
    }
}

