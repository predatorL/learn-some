# mac下安装nvm步骤
1. 下载并执行安装脚本
在当前用户目录下载安装脚本并执行，运行以下命令（2选1）
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
如果下载报错，可以用浏览器直接访问上述脚本地址https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh，然后将返回的脚本内容全选拷贝，并在本地目录下新建一个bash脚本文件，比如：nvm-install.sh，保存后运行命令：bash ./nvm-install.sh，等待命令运行完成

2. 导出nvm命令
上面安装完成后，在终端中执行nvm -v会返回"command not found"的提示，这是因为nvm安装后命令没有导出，在终端不可用。因此可在当前目录新建文件，写入执行脚本即可，代码如下：
```bash
touch .zshrc	#创建zsh终端配置文件
code -n .zshrc #用vscode打开文件
```
## 向.zshrc文件中写入以下脚本：
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

3. 安装你需要的node版本
```bash
sudo chmod 777 .nvm 				#对.nvm目录赋权限（必要步骤，否则安装node会报权限错误）
nvm install 12.0.0 14.0.0		#安装12.0.0和14.0.0版本的node，可同时安装多个版本的node
nvm use 12									#nvm切换node版本
```


## 安装问题

- [github 443 错误 OpenSSL SSL_connect: SSL_ERROR_SYSCALL 或者LibreSSL 终极解决办法](https://juejin.cn/post/7066446514818088990)