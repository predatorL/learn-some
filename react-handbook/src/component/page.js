
import React from 'react';

export default (props) => {
    const {className = '', children, ...other} = props;
    return (
        <div className={`page-wrapper ${className}`}>{children}</div>
    )
}
