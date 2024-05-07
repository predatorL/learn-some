#! /bin/bash

# 安装 apt 依赖包，用于通过HTTPS来获取仓库
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
# 卸载可能存在的旧版本
sudo apt-get remove docker docker-engine docker-ce docker.io
# 添加 Docker 的官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
    sudo apt-key add -
# 设置稳定版仓库
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
# 更新 apt 包索引
sudo apt-get update
# 安装最新版本的 Docker Engine-Community 和 containerd
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
# 测试 Docker 是否安装成功
sudo docker run hello-world
