module.exports = {
    accounts: {
        fields: [
            { name: 'id', type: 'int', comment: '账号ID' },
            { name: 'name', type: 'char(50)', comment: '账号名称' },
            { name: 'password', type: 'int', comment: '账号密码' },
            { name: 'phone', type: 'char(50)', comment: '联系电话' },
            { name: 'address', type: 'int', comment: '联系地址' }
        ],
        comment: '账号'
    },
    groups: {
        fields: [
            { name: 'id', type: 'int', comment: '分组ID' },
            { name: 'name', type: 'char(50)', comment: '分组名称' },
            { name: 'description', type: 'char(50)', comment: '分组功能描述' },
        ],
        comment: '分组'
    }
}
