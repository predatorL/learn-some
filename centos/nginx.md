# 容器脚本
```bash
#! /bin/bash
docker run -d \
    --name local-nginx \
    -p 80:80 \
    -v /data/docker_conf/nginx/config:/etc/nginx \
    -v /data/docker_conf/nginx/html:/usr/share/nginx/html \
    -v /data/docker_conf/nginx/logs:/var/log/nginx \
    nginx:latest

```

# 目录创建
