import React from 'react';
import {Route} from 'react-router-dom';
import context from './context';
import setState from './setState';
import hooks from './setState';
import suspence from './suspence';

export default () => {
    return (
    <React.Fragment>
        <Route path="/base/context" component={context} />
        <Route path="/base/set-state" component={setState} />
        <Route path="/base/hook" component={hooks} />
        <Route path="/base/suspence" component={suspence} />
    </React.Fragment>
    )
}
