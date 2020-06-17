import json

arr = json.loads(open('../data.json', 'r', encoding='utf-8').read())
print('start', arr)

arrLen, count, minIndex = len(arr), 0, 0
for i in range(arrLen - 1):
    minIndex = i
    for j in range(minIndex, arrLen):
        if arr[minIndex] > arr[j]:
            minIndex = j
        count +=1
    if minIndex != i:
        arr[minIndex], arr[i] = arr[i], arr[minIndex]

print('end', arr, '循环次数%d'%(count))