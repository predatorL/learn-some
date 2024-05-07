import React from 'react';
import video from './video';
import { Route } from 'react-router-dom';

export default () => {
    return (
        <React.Fragment>
            <Route path="/scene/video" component={video} />
        </React.Fragment>
    );
};
