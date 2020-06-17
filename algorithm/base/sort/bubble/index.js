const data = require('../data.json');
console.log('start', data);
let count = 0;
for (let i = 0, temp = 0, len = data.length - 1; i < len; i++) {
    temp = len - i;
    for (let j = 0; j < temp; j++) {
        count++;
        if (data[j] > data[j + 1]) {
            [data[j + 1], data[j]] = [data[j], data[j + 1]];
        }
    }
};
console.log('end', data, `循环${count}次`);
