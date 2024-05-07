import React from 'react';
import { Route } from 'react-router-dom';
import mod1 from './mod1';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-warpper">
                <Route path="/form/mod1" component={mod1} />
            </div>
        );
    }
}
