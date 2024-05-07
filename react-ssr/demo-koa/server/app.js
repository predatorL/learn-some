import Koa from 'koa';
import Router from 'koa-router';
import fs from 'fs';
import KoaStatic from 'koa-static';
import path from 'path';
import render from './render';
import seo from './seo';
import injectStore from './store/inject';

const app = new Koa();
const config = {
    port: 3041
}

app.use(
    KoaStatic(path.join(__dirname, '../build'), {
        maxage: 7 * 24 * 60 * 1000,
        index: 'root'
    })
)

let shtml = '';

try {
    shtml = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf8');
} catch (error) {
    console.error(error);
}

// mock
let api = new Router();
api.get('/api/userinfo', (ctx, next) => {
    ctx.body = {
        status: 200,
        data: {
            name: 'test',
            id: 10086,
            idcard: 1008601,
        }
    }
})
api.get('/api/list', (ctx, next) => {
    ctx.body = {
        status: 200,
        data: {
            page: 1,
            size: 3,
            count: 12,
            data: [
                {id: 1, name: 'te1'},
                {id: 2, name: 'te2'},
                {id: 3, name: 'te3'},
            ]
        }
    }
})
app.use(api.routes());

app.use(
    new Router()
    .get('*', async(ctx, next) => {
        let _shtml = shtml;
        ctx.response.type = 'html';
        // SEO
        _shtml = seo(ctx, _shtml);
        // render
        let renderStr = await render(ctx);
        // inject store
        _shtml = injectStore(ctx, _shtml);
        ctx.response.body = _shtml.replace('<div id="root"></div>', `<div id="root">${renderStr}</div>`)
    })
    .routes()
)

app.listen(config.port, () => {
    console.log(`Listening >>  http://localhost:${config.port}/\n`)
})
