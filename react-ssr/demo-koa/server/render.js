import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from '../src/App';
import getContext from './context';
import getStore from './store';
export default async (ctx) => {
    // 从ctx的中获取头信息、url
    let context = await getContext(ctx);
    let store = await getStore(ctx);

    return renderToString(
        <StaticRouter location={ctx.request.url} context={context}>
            <Provider {...store}>
                <App />
            </Provider>
        </StaticRouter>
    )

}
