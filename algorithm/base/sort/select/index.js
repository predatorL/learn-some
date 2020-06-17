
const data = require('../data.json');
const len = data.length;
let count = 0;
console.log('start', data)
for(let minIndex = 0, i = 0; i < len -1; i ++) {
    minIndex = i;
    for(let j = minIndex; j < len; j ++) {
        if(data[minIndex] > data[j]) {
            minIndex = j
        }
        count ++;
    }
    if(minIndex !== i) {
        [data[minIndex], data[i]] = [data[i], data[minIndex]];
    }
}

console.log('end ', data, `循环次数${count}`)
