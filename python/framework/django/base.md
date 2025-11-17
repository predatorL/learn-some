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

