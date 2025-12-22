# 初始化
> 使用uv初始化
> 参考：https://blog.pecar.me/uv-with-django#using-uv-to-create-a-new-django-project
## 命令
```shell
uv init app && cd app
# 添加django依赖
uv add django
# 创建project
uv run django-admin startproject myproject .
# 创建app
> https://docs.djangoproject.com/zh-hans/5.2/ref/django-admin/#django-admin-startapp
> uv run manage.py startapp app_messages 
## 在指定创建app
> 需要注意 project_app/cook需要提前创建好
> uv run django-admin startapp cook ./project_app/cook
> 对于已创建的app，引入方式为
MD```
让 Django 识别 apps 目录
# cms/settings.py
import os
import sys

# 把 apps 目录加入 sys.path（让 Python 能识别 apps 下的模块）
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))  # 新增这行

# 其他原有配置...
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    # ... 其他内置 App
    
    # 方式 1：加入 apps 目录后，直接写 App 名（推荐）
    'checklist',
    
    # 方式 2：不加入 sys.path 时，写完整路径
    # 'apps.checklist',
]
```


 ## 配置设置
* 调整镜像源
> 根目录 uv.toml
```toml
index-url = "https://pypi.tuna.tsinghua.edu.cn/simple"
```

# 调试
 > 启动本地测试服务器 
 > uv run manager.py runserver 7000
```
## 项目 VS 应用
> 项目和应用有什么区别？应用是一个专门做某件事的网络应用程序——比如博客系统，或者公共记录的数据库，或者小型的投票程序。项目则是一个网站使用的配置和应用的集合。项目可以包含很多个应用。应用可以被很多个项目使用。

