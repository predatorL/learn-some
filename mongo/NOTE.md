## 基础命令
- show dbs
你想查看所有数据库
- use DATABASE_NAME
    - 如果数据库不存在，则创建数据库，否则切换到指定数据库, 刚创建的数据库 runoob 并不在数据库的列表中， 要显示它，我们需要向 runoob 数据库插入一些数据
- db.dropDatabase()
    - 删除数据库, 删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名
- db.collection.drop()
    - 删除集合  // db.site.drop()
    - 成功删除选定集合，则 drop() 方法返回 true，否则返回 false
- db.createCollection(name, options)
    * name: 要创建的集合名称
    * options: 可选参数, 指定有关内存大小及索引的选项, capped, autoIndexId, size, max
    - 使用 createCollection() 方法来创建集合
    - 在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合
- show collections
    - 查看已有集合

#### BSON
文档的数据结构和JSON基本一样。
所有存储在集合中的数据都是BSON格式。
BSON是一种类json的一种二进制形式的存储格式,简称Binary JSON。


### 插入文档
- db.COLLECTION_NAME.insert(document)
    - MongoDB 使用 insert() 或 save() 方法向集合中插入文档，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档
    - 插入文档你也可以使用 db.col.save(document) 命令。如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。
