const arr = require('../data.json');

console.log('start', arr);
let count = 0;

for(let len = arr.length, aux, j, i = 1; i < len; i ++) {
    j = i;
    aux = arr[i];
    while(j > 0 && arr[j - 1] > aux) {
        count ++;
        arr[j] = arr[j-1];
        j --;
    }
    arr[j] = aux;
}

console.log('end', arr, `循环了${count}次, 不固定的`)