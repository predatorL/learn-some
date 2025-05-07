## base
以下是针对中小型项目的 **Docker Compose 集成方案**，包含 MySQL、RabbitMQ、Jenkins 和 Redis，数据统一挂载到 `$HOME/workplace/data/` 目录，配置简洁且满足基础需求：

---

### **一、目录结构规划**
```bash
$HOME/workplace/data/
├── mysql/        # MySQL 数据
├── rabbitmq/     # RabbitMQ 数据
├── jenkins/      # Jenkins 数据
└── redis/        # Redis 数据
```

---

### **二、`docker-compose.yml` 完整配置**
```yaml
version: '3.8'

services:
  # Redis 服务
  redis:
    image: redis:7.0-alpine
    container_name: my_redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - $HOME/workplace/data/redis:/data
    environment:
      - TZ=Asia/Shanghai
      - REDIS_PASSWORD=your_redis_password  # Redis 密码
    command: redis-server --requirepass $${REDIS_PASSWORD} --appendonly yes

  # MySQL 8.0.x（注：8.4.4 镜像可能不存在，暂用 8.0 最新版）
  mysql:
    image: mysql:8.0
    container_name: my_mysql
    restart: unless-stopped
    ports:
      - "3306:3306"
    volumes:
      - $HOME/workplace/data/mysql:/var/lib/mysql  # 挂载MySQL数据
      - ./mysql/conf:/etc/mysql/conf.d             # 可选：自定义配置
    environment:
      - TZ=Asia/Shanghai
      - MYSQL_ROOT_PASSWORD=your_mysql_root_password  # Root密码
      - MYSQL_DATABASE=app_db                         # 初始数据库
      - MYSQL_USER=app_user                           # 初始用户
      - MYSQL_PASSWORD=app_user_password              # 用户密码
    networks:
      - app_net

  # RabbitMQ 3.13.7
  rabbitmq:
    image: rabbitmq:3.13.7-management  # 带管理界面版本
    container_name: my_rabbitmq
    restart: unless-stopped
    ports:
      - "5672:5672"   # AMQP协议端口
      - "15672:15672" # 管理界面端口
    volumes:
      - $HOME/workplace/data/rabbitmq:/var/lib/rabbitmq
    environment:
      - TZ=Asia/Shanghai
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=admin_password

  # Jenkins LTS
  jenkins:
    image: jenkins/jenkins:2.492.3-lts
    container_name: my_jenkins
    restart: unless-stopped
    ports:
      - "8080:8080"   # Web界面
      - "50000:50000" # Agent通信
    volumes:
      - $HOME/workplace/data/jenkins:/var/jenkins_home  # 核心配置和插件
      - /var/run/docker.sock:/var/run/docker.sock       # 允许Jenkins调用Docker（可选）
    environment:
      - TZ=Asia/Shanghai
    networks:
      - app_net

networks:
  app_net:
    driver: bridge
```

---

### **三、关键配置说明**
#### **1. Redis**
- 数据持久化：挂载 `$HOME/workplace/data/redis`，启用 AOF。
- 安全：通过 `REDIS_PASSWORD` 设置密码。

#### **2. MySQL**
- **数据持久化**：挂载到 `$HOME/workplace/data/mysql`。
- **初始化配置**：自动创建数据库 `app_db` 和用户 `app_user`。
- **字符集配置（可选）**：  
  在 `./mysql/conf/my.cnf` 中添加：
  ```ini
  [mysqld]
  character-set-server=utf8mb4
  collation-server=utf8mb4_unicode_ci
  ```

#### **3. RabbitMQ**
- 使用 **management 镜像**：自带 Web 管理界面（访问 `http://localhost:15672`）。
- 默认用户：`admin`，密码：`admin_password`。

#### **4. Jenkins**
- **持久化配置**：挂载 `$HOME/workplace/data/jenkins` 保存所有配置和插件。
- **集成 Docker**：挂载 `docker.sock` 允许 Jenkins 操作 Docker（按需启用）。

---

### **四、操作步骤**
#### **1. 创建目录并启动服务**
```bash
# 创建数据目录
mkdir -p $HOME/workplace/data/{mysql,rabbitmq,jenkins,redis}

# 启动所有服务
docker compose up -d
```

#### **2. 初始化验证**
- **MySQL**：连接测试
  ```bash
  docker exec -it my_mysql mysql -u app_user -papp_user_password
  ```
- **RabbitMQ**：访问 `http://localhost:15672` 登录管理界面。
- **Jenkins**：访问 `http://localhost:8080`，根据提示获取初始管理员密码：
  ```bash
  cat $HOME/workplace/data/jenkins/secrets/initialAdminPassword
  ```
- **Redis**：连接测试
  ```bash
  docker exec -it my_redis redis-cli -a your_redis_password
  ```

---

### **五、常见问题处理**
1. **MySQL 权限问题**：  
   若挂载目录权限不足，执行：
   ```bash
   sudo chown -R 1001:1001 $HOME/workplace/data/mysql
   ```

2. **Jenkins 插件安装慢**：  
   替换镜像源：进入 Jenkins 管理界面 → 插件管理 → 高级 → 替换 `https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json`。

3. **RabbitMQ 端口冲突**：  
   调整 `docker-compose.yml` 中的端口映射（如 `"15672:15672"` → `"18080:15672"`）。

---

### **六、扩展建议**
- **备份**：定期压缩 `$HOME/workplace/data` 目录并备份到云存储。
- **安全加固**：  
  - MySQL：限制 root 远程访问。
  - RabbitMQ：禁用默认账户，创建业务专用用户。
  - Jenkins：安装 Role-based Authorization 插件管理权限。

## 容器脚本
> docker-compose -f npm-docker-compose.yml up -d
> -d 参数应该紧跟在 up 命令之后, 通过 -f 或 --file 参数，你可以轻松指定要使用的 Docker Compose 文件