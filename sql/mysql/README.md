# mysql基础
```
-启动
service mysql start

-进入
mysql -u root -p

-退出
exit;

-列出现有数据库/表
show databases;
show tables;

-创建/切换/删除数据库
create database test1;
use test1;
drop database test1;

-创建表/显示所有表/显示表结构
创建MySQL数据表需要以下信息：表名 表字段名 定义每个表字段
create table t1 (c1_num int, c2_date date, c3_str char(50));
create table t1( user_id int UNSIGNED AUTO_INcrement, name char(50), sex int, idcard int(18), primary key (user_id));
show tables;
desc t1;

```
-插入/显示数据
insert into t1 (name, sex, idcard) values ("a222", 12, 1321233);
insert into t1 (user_id, name, sex, idcard) values (2, "a222", 12, 1321233);
select * from t1;

-查询数据
SELECT column_name,column_name FROM table_name [WHERE Clause] [LIMIT N][ OFFSET M];

# mysql基础注意事项
```
-1
MySQL命令终止符为分号 (;) , 一般执行语句需要;才结束

-2
MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。
每种类别下都包含一堆的具体类型，有点难记啊
```

# mysql进阶命令
```
-查询当前数据库所有的表（关键词:table_name\information_schema.tables\table_schema\table_type）
select table_name from information_schema.tables  where table_schema='test1' and table_type='base table'

-concat指令
concat可以把select出来的结果按照自身的定义做批量的输出
查出来的table_name通过concat('drop table ',table_name,';')就变成一串的'drop table xxxx;'了
```
