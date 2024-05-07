# 启动
docker run --name nginxweb -p 8080:80 -d nginx

# 创建目录
mkdir -p /data/nginx/conf /data/nginx/www /data/nginx/logs

# 复制
docker cp nginxweb:/etc/nginx/nginx.conf /data/nginx
docker cp nginxweb:/etc/nginx/conf.d /data/nginx/conf
docker cp nginxweb:/usr/share/nginx/html /data/nginx/www
docker cp nginxweb:/var/log/nginx /data/nginx/logs