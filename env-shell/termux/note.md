# base
* 开启tab： 音量键上 + q
## ssh链接


## 添加密码

```shell
pkg install termux-auth
passwd
``` 

## ssh
```
pkg upgrade
# 安装
pkg install openssh
# 开启
sshd
# 关闭
kill sshd
# 连接
ssh -p 8022 user@hostname_or_ip
```