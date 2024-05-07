import React from 'react';
import Demo1 from './demo1';
import Demo2 from './demo2';


export default class extends React.Component {


    render() {
        return (
            <div className="main-container mobx">
                <Demo1 ></Demo1>
                <Demo2 />
            </div>
        )
    }
}
