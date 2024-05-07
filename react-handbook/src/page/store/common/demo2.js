import React from 'react';

const store1 = React.createContext({

})

const View1 = (props) => {
    return (
        <div className="view1">
            11111
            <text></text>
        </div>
    )
}

export default class extends React.Component {
    render() {
        return (
            <section>
                <header>context模式</header>
            </section>
        )
    }
}
