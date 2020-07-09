# 环境准备

------

# flask
## 安装flask
> pip install/uninstall Flask
### flask调试模式
app.debug = True

### flask 主要依赖
* Jinjia2: 默认模板引擎
* Werkzeug: 一个包含WSGI(Python Web Server Gateway interface)、路由、调试的工具集
* Itsdangerous: 基于Django签名模块的签名实现

### 动态路由
```python
@app.route('/path/<variable_name>')
@app.route('/path/<converter:variable_name>')
```
> converter: 转换器. 默认字符串类型
>> 如果不西方定制子路径，而是通过参数那需要  /test/?name=a -> request.args.get('name'); POST方式使用 request.form.get('name')

* string: 接受任何没有斜杠'/'的文本
* int: 接收整数
* float: 同int，但接受浮点数
* path: 和默认的string相似，但也接受斜杠
* uuid: 只接受uuid字符串
* any: 可以指定多种路径，但是需要传入参数
```python demo
@app.route('/<any(a, b):page_name>')
# 访问/a/和/b/都符合规则  
```

### werkzeug.routing -> BaseConverter
* to_python: 把路径传换成一个python对象
* to_url: 把参数转换成符合URL的形式

------
# 学习计划
## 第一阶段
* 基本应用
* 基础权限校验
* redis简单应用
* mysql简单应用
* 线程简单应用
* 进程通信简单应用
* 文件系统简单实践应用
* 定时任务简单应用

