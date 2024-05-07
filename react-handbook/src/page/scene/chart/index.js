import React from 'react';
import { Route } from 'react-router-dom';
import mod1 from './mod1';
/**
 * items: [
        {
            to: 'mod1',
            title: '折线'
        },
        {
            to: 'mod2',
            title: '饼图'
        },
        {
            to: 'mod3',
            title: '热力图'
        },
        {
            to: 'mod4',
            title: '地图'
        },
        {
            to: 'mod5',
            title: '深度图'
        },
        {
            to: 'mod6',
            title: '拓扑图'
        }
    ]
 */
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
