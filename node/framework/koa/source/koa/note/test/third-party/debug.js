/**
 * @参考链接 : https://segmentfault.com/a/1190000012699304
 * @cmd :
 *      - DEBUG=worker:* node note/test/third-party/debug.js
 *      - DEBUG=worker:a node note/test/third-party/debug.js
 *      - DEBUG=worker:b node note/test/third-party/debug.js
 * @名词 :
 *      - 调试器
 */
const Debugger = require('debug');

const a = Debugger('worker:a');
const b = Debugger('worker:b');

function work() {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

workb();


