# 桶排序
- 特点: 非常快，非常浪费空间,
- 时间复杂度：O(M+N)
- 实现: 每一轮最大数都会跑到尾部，所以可以减少循环次数， 不减去i也没事;
> 数组循环外层减一
> 相邻两张牌，每次内循环都可能会交换，可能会交换多次，直到最大出现，然后在结束的时候被交换到最后了