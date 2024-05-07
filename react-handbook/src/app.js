import React from 'react';
import { Router } from 'react-router-dom';
import history from './util/history';
import Routes from './page/routes';
import Aside from './mod/aside';

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="page-root">
                    <Aside />
                    <main className="page-main">
                        <Routes />
                    </main>
                </div>
            </Router>
        );
    }
}
export default App;
