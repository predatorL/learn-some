const puppeteer = require('puppeteer');
const process = require('child_process');
const fse = require('fs-extra');

(async () => {
    const browser = await puppeteer.launch({
        //设置超时时间
        // timeout: 15000,
        //如果是访问https页面 此属性会忽略https错误
        // ignoreHTTPSErrors: true,
        // 打开开发者工具, 当此值为true时, headless总为false
        devtools: true,
        // 关闭headless模式, 不会打开浏览器 提升性能
        headless: false,
        defaultViewport: {
            width: 1200,
            height: 800
        }
    });
    const page = (await browser.pages())[0];
    page.on('response', async res => {
        // 屏蔽无关的响应
        if (res.url().indexOf('web-api.juejin.im/query') == -1) {
            return;
        }
        let result = await res.json();
        let sources = result.data.articleFeed.items.edges;
        let posts = sources.map(({ node }) => {
            return {
                title: node.title,
                url: node.originalUrl,
                author: node.user.username
            };
        });
        fse.writeJson('./demo/res_posts.json', posts);
        // browser.close();
    });
    await page.goto('https://juejin.im/');
    // 等待两秒让页面加载数据
    await page.waitFor(2000);
    // 截图
    await page.screenshot({
        path: '掘金首页.png',
        type: 'png',
        // quality: 100, 只对jpg有效
        fullPage: true
        // 指定区域截图，clip和fullPage两者只能设置一个
        // clip: {
        //   x: 0,
        //   y: 0,
        //   width: 1000,
        //   height: 40
        // }
    });

    // 获取热门文章列表
    // const pageData = await page.$$eval('.entry-list .item', posts => {
    //     // eval的执行环境是浏览器内
    //     let arr = posts.map(function(){
    //         return {
    //             title: $(this).find('.title-row').text(),
    //             href: $(this).find('.entry-link')[0].href,
    //             author: $(this).find('.username').text(),
    //         }
    //     });
    //     return arr;
    // });
    // process.exec(`echo "${JSON.stringify(pageData, null, 2)}" > ./demo/posts.txt`);
})();
