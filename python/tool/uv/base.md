# uv (uv: Unified Python packaging) 

# 环境
## 初始化旧的项目
cd example
uv init
```
uv 提供了完整的项目管理功能，可以通过 uv init 初始化项目，并使用 pyproject.toml 文件来声明项目元数据和依赖关系。与 npm 的 package.json 类似，您可以在其中定义项目所需的所有库和版
```
## 创建新项目并初始化
uv init new_example
## 注意此时并不会创建环境（编辑器也不会识别到当前项目中的解释器版本），只有安装包时会自动创建环境或者直接用命令：
uv venv
## 默认使用最新的Python版本，也可为环境指定Python版本
uv venv --python 3.11


# 包安装和管理

## 在当前环境中安装\移除flask
uv add flask
uv remove flask

```
使用 uv add 命令可以轻松添加新依赖，而 uv remove 则可以删除不再需要的库。这与 npm 的安装和卸载命令相似，确保您的项目始终保持干净和高效。
```

## 查看当前依赖树
uv tree

## 锁定版本
uv lock 创建锁定文件

##运行脚本	
uv run <script>

## 同步环境
uv sync
```
uv 通过 uv sync 命令来保持虚拟环境与项目要求的一致性。这个命令会检查当前环境与 pyproject.toml 中定义的依赖关系，并执行必要的安装、升级或卸载操作。这类似于 npm 中确保 package.json 和 node_modules 目录一致性的过程。
```

## 安装工具
uv add -g black
uv tool install ruff

## 执行工具
uv run django-admin startproject hello .

# 参考文档
- [uv](https://uv.readthedocs.io/en/latest/)
- https://juejin.cn/post/7444387793842864169