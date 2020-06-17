import json

arr = json.loads(open('../data.json', 'r', encoding='utf-8').read())
arrLen, count = len(arr), 0
print('start', count)

for i in range(arrLen - 1):
    for j in range(arrLen - i - 1):
        count += 1
        if arr[j] > arr[j + 1]:
            arr[j + 1], arr[j] = arr[j], arr[j + 1]
print('end ', arr, '循环%d次' % (count))
