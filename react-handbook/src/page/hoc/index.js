import React from 'react';
import { Route } from 'react-router-dom';
import mod1 from './mod1';
import Demo2 from './mod2';


export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hoc-warpper">
                <Route path="/context/mod1" component={mod1} />
                <Demo2 />
            </div>
        );
    }
}
