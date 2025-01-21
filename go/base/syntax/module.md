在 Go 语言中，自定义模块指的是你自己创建的、可复用的代码集合。Go 模块（module）是一个包含 Go 包的目录树，其中所有包都属于同一个版本控制库，并且可以作为一个整体进行发布和依赖管理。

### 创建自定义模块

要创建一个自定义模块，你需要做以下几步：

1. **初始化模块**：
   在你想要作为模块根目录的文件夹中打开命令行工具，然后运行 `go mod init <module-name>` 命令，这里 `<module-name>` 通常是你的模块在网络上的导入路径，例如 `github.com/yourusername/yourmodule`。

2. **创建包**：
   在模块的根目录下创建子目录，每个子目录通常代表一个包。在每个包的目录中创建 `.go` 文件，编写你的代码。

3. **编写代码**：
   确保每个 `.go` 文件的第一行是 `package <name>`，这里的 `<name>` 是该文件所属的包名。如果文件位于模块的根目录，则通常是 `package main`。

4. **添加依赖**：
   如果你的模块依赖其他外部模块，你可以使用 `go get` 命令来下载并自动添加它们到 `go.mod` 文件中。

5. **测试模块**：
   使用 `go test` 来确保你的模块工作正常。

### 引用自定义模块

假设你已经创建了一个名为 `mymodule` 的模块，并且它有一个名为 `mypackage` 的包。要在 `main.go` 中引用这个包，你需要做的是：

1. **设置 GOPATH 或使用 Go Modules**：
   如果你是在 Go 1.11 或更高版本中工作，你应该已经在使用 Go Modules，因此不需要关心 GOPATH。

2. **导入包**：
   在 `main.go` 文件中，通过 `import` 语句引入你的模块中的包，比如：

```go
import (
    "fmt"
    "github.com/yourusername/mymodule/mypackage" // 替换为实际的模块路径
)
```

3. **使用包中的函数或类型**：
   在 `main.go` 中使用 `mypackage` 提供的函数或类型，例如：

```go
func main() {
    mypackage.MyFunction()
    var myVar mypackage.MyType
    fmt.Println(myVar)
}
```

如果你的模块和主程序在同一本地文件系统上，但不在同一模块内，那么你可以使用 `replace` 指令在 `go.mod` 文件中指定本地路径，以便开发时引用本地模块副本，而不是远程仓库中的模块。

例如，在 `main.go` 所属的模块的 `go.mod` 文件中添加如下内容：

```text
replace github.com/yourusername/mymodule => ../path/to/local/mymodule
```

这将告诉 Go 编译器使用本地路径下的 `mymodule` 而不是从 GitHub 上拉取。当你要部署或分享你的项目时，请记得移除或注释掉 `replace` 指令，以确保其他人能够正确解析依赖关系。