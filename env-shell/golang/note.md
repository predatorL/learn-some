# 安装golang
https://www.runoob.com/go/go-environment.html
```
# 1. 下载二进制包：go1.4.linux-amd64.tar.gz。
# 2. 将下载的二进制包解压至 /usr/local目录。
tar -C /usr/local -xzf go1.4.linux-amd64.tar.gz
# 3. 将 /usr/local/go/bin 目录添加至 PATH 环境变量：
export PATH=$PATH:/usr/local/go/bin
# 我们可以编辑 ~/.bash_profile 或者 /etc/profile，并将以下命令添加该文件的末尾，这样就永久生效了：
# 添加后需要执行：
source ~/.bash_profile
或
source /etc/profile
```
