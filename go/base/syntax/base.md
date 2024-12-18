# 基础
- 字符串模版
字段命名：Go 中的结构体字段必须以大写字母开头才能被外部包或反射机制访问。
模板变量：确保模板中的变量名称与传递给模板的数据结构中的字段名称完全一致。
使用 bytes.Buffer：用作 io.Writer 接口的实现，用来收集模板执行结果。
```history.sql.tmpl
SELECT
log_time,
eid,

...

WHERE   t.ds = "{{.DS}}"
AND     t.uid = '{{.UID}}'
AND     log_time >= '{{.StartTime}}'
AND     log_time <= '{{.EndTime}}'
ORDER BY log_time asc
LIMIT  50000;
```
```golang
package main

import (
	"bytes"
	"fmt"
	"log"
	"text/template"
)

// 定义结构体来保存要传递给模板的数据，并确保字段名首字母大写
type QueryParams struct {
	DS         string
	UID        string
	StartTime  string
	EndTime    string
}

func main() {
	// 准备数据
	params := QueryParams{
		DS:         "ds_2020_06_01",
		UID:        "uid_2020_06_01",
		StartTime:  "2020-06-01 00:00:00",
		EndTime:    "2020-06-01 23:59:59",
	}

	// 读取并解析 SQL 模板文件
	tmpl, err := template.ParseFiles("history.sql.tmpl")
	if err != nil {
		log.Fatalf("template parsing error: %v", err)
	}

	// 使用 bytes.Buffer 作为 io.Writer 来接收模板执行的结果
	var buffer bytes.Buffer
	err = tmpl.Execute(&buffer, params)
	if err != nil {
		log.Fatalf("template executing error: %v", err)
	}

	sqlStr := buffer.String()
	fmt.Println(sqlStr) // 打印生成的SQL语句用于调试或日志记录
}
```