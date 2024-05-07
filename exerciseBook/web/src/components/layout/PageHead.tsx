import React from 'react';
import { Link } from "react-router-dom";

const PageHead = () => {
    return (
        <header className='page-header'>
            <Link to="/">
                主页
            </Link>
        </header>
    )
}

export default PageHead;