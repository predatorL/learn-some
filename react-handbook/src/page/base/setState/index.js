import React from 'react';
import {Page} from '@/component';

const dateUtil = {
    get stamp() {
        return new Date().getTime()
    }
}

class Mod1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        count: 0,
        count2: 1,
    }

    onClick1 = async () => {
        const {state} = this;
        console.log(dateUtil.stamp);
        // 无效会被覆盖
        this.setState({
            count: 1,
        })
        this.setState({
            count: 3,
        }, (...assets) => {
            console.log(dateUtil.stamp, 'setState cb inner', assets, this.state.count, state.count)
        })
        console.log(dateUtil.stamp, 'out ', this.state.count)
        this.setState({
            count: 2,
        })

    }

    onClick2 = () => {
        console.log(dateUtil.stamp)
        this.setState((state, props) => {
            let count2 = state.count2 * props.num1;
            console.log(dateUtil.stamp, 'set fn', state, props, count2)
            return {
                count2
            }
        }, () => {
            console.log(dateUtil.stamp, 'set cb', this.state.count2)
            this.setState({
                count2: this.state.count2 + 2
            })
        })
        console.log(dateUtil.stamp, 'out', this.state.count2)

    }

    render() {
        const {state} = this;
        return (
            <section>
                <button onClick={this.onClick1}>+2</button>
                <input type="text" readOnly value={state.count}/>
                <hr/>
                <button onClick={this.onClick2}>+33</button>
                <input type="text" readOnly value={state.count2}/>

            </section>
        )
    }
}



export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page className="set-state">
                <Mod1 num1={10}/>
            </Page>
        )
    }
}
