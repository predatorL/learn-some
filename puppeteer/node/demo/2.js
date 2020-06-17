const puppeteer = require('puppeteer');
const process = require('child_process');

(async () => {
    const browser = await puppeteer.launch({
        devtools: true,
        headless: true
    });
    const page = (await browser.pages())[0];

    // 开始收集JS和CSS文件的覆盖率信息
    await Promise.all([page.coverage.startJSCoverage(), page.coverage.startCSSCoverage()]);

    await page.goto('https://juejin.im/');
    await page.waitForSelector('title');

    // 现在，通过这些指标(指标说明)，就可以计算各种加载时间，例如，loadEventEnd - navigationStart表示从导航开始到页面加载完成的时间。
    const metrics = await page.evaluate(() => JSON.stringify(window.performance));

    // 将结果解析为JSON
    process.exec(`echo "${JSON.stringify(metrics, null, 2)}" > ./demo/metrics.txt`);

    // 停止收集覆盖率信息
    const [jsCoverage, cssCoverage] = await Promise.all([page.coverage.stopJSCoverage(), page.coverage.stopCSSCoverage()]);

    // 根据覆盖率计算使用了多少字节
    const calculateUsedBytes = (type, coverage) =>
        coverage.map(({ url, ranges, text }) => {
            let usedBytes = 0;

            ranges.forEach(range => (usedBytes += range.end - range.start - 1));

            return {
                url,
                type,
                usedBytes,
                totalBytes: text.length
            };
        });

    console.info([...calculateUsedBytes('js', jsCoverage), ...calculateUsedBytes('css', cssCoverage)]);
    browser.close();
})().catch(err => {
    console.log(err);
});
