#! /bin/bash
# 更新包
# sudo apt-get update
# 开始安装
# sudo apt-get install redis-server

# 提示“是否修改端口”并等待30秒，把用户的输入保存入变量name中
read -p "是否修改端口 (y/n):" name
if [ "$name" = 'y' ]
    then
        sed -i "s/port 6379/port 6381/g" ./redis/test.conf
        echo '修改成功'
    else
        echo '放弃修改'
fi