import React from 'react';
import Mod1 from './mod1';
import Mod2 from './mod2';

export default class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="context-warpper">
                <Mod1 />
                <Mod2 />
            </div>
        );
    }
}
