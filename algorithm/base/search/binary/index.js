const data = require('./data');

/**
 * 二分查找，递归实现。
 * @param target
 * @param arr
 * @param start
 * @param end
 * @returns {*}
 */
function binarySearch1(target, arr, start, end) {
    var start = start || 0;
    var end = end || arr.length - 1;

    var mid = parseInt(start + (end - start) / 2);
    if (target == arr[mid]) {
        return mid;
    } else if (target > arr[mid]) {
        return binarySearch(target, arr, mid + 1, end);
    } else {
        return binarySearch(target, arr, start, mid - 1);
    }
    return -1;
}

/**
 * 有序的二分查找，返回-1或存在的数组下标。不使用递归实现。
 * @param target
 * @param arr
 * @returns {*}
 */
function binarySearch2(target, arr) {
    var start = 0;
    var end = arr.length - 1;

    while (start <= end) {
        var mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
