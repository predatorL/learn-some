
#! /bin/bash
# 参数 -p 设置端口，--name 取名 ，-e MYSQL_ROOT_PASSWORD=123456 设置 账号为 root ，密码为 123456 ，-d 表示作为一个守护进程在后台运行
docker run -p 80:80 \
    --name local_nginx \
    -v /data/docker/nginx/nginx.conf:/etc/nginx/nginx.conf \
    -v /data/docker/nginx/conf/conf.d:/etc/nginx/conf.d \
    -v /data/docker/nginx/www:/usr/share/nginx \
    -v /data/docker/nginx/logs:/var/log \
    -d \
    nginx
