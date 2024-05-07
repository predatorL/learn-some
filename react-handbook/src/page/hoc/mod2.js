
import React from 'react';

const Warped1 = function (target) {
    let DidMount = target.prototype.componentDidMount;
    target.prototype.componentDidMount = function() {
        DidMount.call(this);
        console.log('Warped1 componentDidMount')
    }
}

// componentDidMount 劫持
@Warped1
class Demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.foo = 12311
    }

    componentDidMount() {
        console.log('inner componentDidMount', this.foo)
    }
    render() {
        return (
            <div > Demo2</div>
        )
    }
}

export default Demo2;



