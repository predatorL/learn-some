const data = require('../data.json');

let _max = Math.max(...data);
let bucket = new Array(_max).fill(0);