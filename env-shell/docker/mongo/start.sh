
#! /bin/bash
# 参数 -p 设置端口，--name 取名 ，-e MYSQL_ROOT_PASSWORD=123456 设置 账号为 root ，密码为 123456 ，-d 表示作为一个守护进程在后台运行
docker run -p 27017:27017 \
    --name local_mongo \
    -v=/data/docker/mongo/config:/data/configdb \
    -v=/data/docker/mongo/db:/data/db \
    -d mongo