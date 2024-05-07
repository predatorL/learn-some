import React from 'react';
import { Route } from 'react-router-dom';
// layout
import common from './common';
import mobx from './mobx';
import redux from './redux';

export default () => {
    return (
        <React.Fragment>
            <Route path="/store/common" component={common} />
            <Route path="/store/mobx" component={mobx} />
            <Route path="/store/redux" component={redux} />
        </React.Fragment>
    );
}

