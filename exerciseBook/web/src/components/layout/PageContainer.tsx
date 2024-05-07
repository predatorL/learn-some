import React from 'react';
import { Outlet } from "react-router-dom";



const PageContainer = (props: any) => {
    const name = 111;
    return (
        <main className={`page-container page-container_${name}`}>
            page-container_{name}
            <Outlet />
        </main>
    )
}

export default PageContainer;