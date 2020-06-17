## curl模拟delete/put/post/get请求

curl -h来查看请求参数的含义
-v 显示请求的信息
-X 选项指定其它协议

get:
    curl -v localhost:8081/test1?name=111&type=2

post:
    curl -v localhost:8081/test1 -d 'name=111&type=2'
    curl -v -X POST localhost:8081/test1 -d 'name=111&type=2'

put:
    curl -v -X PUT -d "age=19&cupSize=C" localhost:8081/test1 -d 'name=111&type=2'

delete:
    curl -v -X DELETE localhost:8081/test1 -d 'name=111&type=2'
