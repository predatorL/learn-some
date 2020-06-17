### argv 进程的命令行参数
- process.argv
```
返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。
第一个元素为process.execPath，　第二个元素为当前执行的JavaScript文件路径，剩余的元素为其他命令行参数。
比如:
~ node demo1-argv.js
=> [ '/usr/bin/node', '/testplace/node-learn/base/process/demo1-argv.js' ]
~ node demo1-argv.js -port=880 a b=ccc
=> [ '/usr/bin/node', '/testplace/node-learn/base/process/demo1-argv.js', '-port=880', 'a', 'b=ccc' ]
通常我们会从下标2开始取值
```
- IPC 进程间通信

# 现阶段用得到的
- (暂时没看)process的事件
- (暂时没看)process.abort：使进程立即结束，并生成一个core文件。
- process.argv: 返回数组，包含了启动进程时的命令行参数,cli用得到
- (暂时没看)process.chdir：变更进程的当前工作目录
- (暂时没看)process.cwd：返回进程当前工作的目录
- (暂时没看)process.env：返回一个包含用户环境信息的对象（TERM， SHELL， USER， PATH， PWD， EDITOR， SHLVL， HOME， LOGNAME），可以修改这个对象，但方法得对
- (暂时没看)process.execPath：返回启动进程的可执行文件所在的绝对路径。
- (暂时没看)process的事件

# (特殊的)环境
- (暂时没看)process.env：用户环境信息的对象
- (暂时没看)process.execArgv：返回当Node.js进程被启动时，Node.js特定的命令行选项（这些选项在process.argv属性返回的数组中不会出现　--harmony）
- (暂时没看)process.execPath：进程的可执行文件所在的绝对路径
- (暂时没看)process.getgid：进程的有效数字标记的组身份
- (暂时没看)process.getuid：进程的有效数字标记的用户身份
- (暂时没看)process.kill(pid[, signal])：即使这个函数的名称是process.kill(),它其实只是发送信号，这点与kill系统调用类似。 发送的信号可能是做一些与kill目标进程无关的事情。
- (暂时没看)rocess.memoryUsage：进程的内存使用情况的对象，该对象每个属性值的单位为字节
- (暂时没看)process.pid：进程的PID
- (暂时没看)process.platform：进程运行其上的操作系统平台
- (暂时没看)process.release：当前发布相关的元数据对象，包括源代码和源代码头文件 tarball的URLs

# (特殊的)队列
- (暂时没看)process.nextTick：将 callback 添加到"next tick 队列"。 一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。这种方式不是setTimeout(fn, 0)的别名。它更加有效率。事件轮询随后的ticks 调用，会在任何I/O事件（包括定时器）之前运行。

# (特殊的)父子进程
- (暂时没看)process.send：如果Node.js进程是通过进程间通信产生的，那么，process.send()方法可以用来给父进程发送消息。 接收到的消息被视为父进程的ChildProcess对象上的一个'message'事件。
- (暂时没看)process.nextTick：
- (暂时没看)process.nextTick：


### 好了，暂时到此

