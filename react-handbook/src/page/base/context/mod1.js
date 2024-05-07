import React from 'react';
import {Button} from 'antd';

const MyContext = React.createContext('light');

const Btn = props => {
    console.log(props.theme)
    const {onchange, data} = props.theme;
    return <Button onClick={onchange}>1111- {data.a}</Button>
}

class ThemeBtn extends React.Component {
    static contextType = MyContext
    render() {
        console.log(this.context)
        return <Btn theme={this.context}/>
    }
}

var Toolbar = props => {
    return (
        <div className="tool-bar">
            <ThemeBtn />
            <MyContext.Consumer>
                {value => {
                    return (
                        <div>Consumer : {value.data.a}</div>
                    )
                }}
            </MyContext.Consumer>
        </div>
    )
}

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: {a: 11}
    }

    get data() {
        return {
            a: Math.random()
        }
    }

    change = () => {
        this.setState({
            data: {
                a: Math.random()
            }
        })
    }

    change2 = () => {
        console.log('change2', this.data)
    }

    render() {
        let change = this.change
        let _val = {
            data: this.state.data,
            onchange: this.change
        }
        // let change = this.change2
        // let _val = {
        //     data: this.data,
        //     onchange: change
        // }
        return (
            <section className="mod1">
                <Button onClick={change}>test</Button>
                <MyContext.Provider value={_val}>
                    <Toolbar />
                </MyContext.Provider>
            </section>
        );
    }
}
