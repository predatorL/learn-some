// TODO: 需要添加database的name
const sqls = {
    // keys: table_name,table_comment; table_name: test1; table_type: 'base table';
    select_tables: `select {{keys}} from information_schema.tables
    where table_schema='{{table_name}}' and table_type='{{table_type}}';`,
    select_tables_and_drop: `select concat('drop table ',table_name,';') from information_schema.tables
    where table_schema='test1' and table_type='base table';`
}

module.exports = sqls
