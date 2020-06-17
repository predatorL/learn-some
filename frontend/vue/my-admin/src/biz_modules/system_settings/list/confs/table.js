export const listCfg = () => {
    return [
        {
            label: '主机名',
            prop: 'hostname',
            width: 100
        },
        {
            label: 'IP地址',
            prop: 'ip',
            width: 120
        },
        {
            label: '制造商',
            prop: 'manufacturer'
        },
        {
            label: '型号',
            prop: 'model'
        },
        {
            label: 'SN',
            prop: 'host_sn'
        },
        {
            label: '业务名',
            prop: 'business_name'
        },
        {
            label: '资产到货时间',
            prop: 'arrival_time',
            width: 140
        },
        {
            label: '状态',
            prop: 'accessable_status'
        },
        {
            label: 'Agent上线时间',
            prop: 'create_time',
            width: 160
        },
        {
            label: '操作',
            actions: [
                {
                    icon: 'el-icon-edit',
                    title: '编辑',
                    method: 'edit'
                },
                {
                    icon: 'el-icon-delete',
                    title: '删除',
                    method: 'delete'
                }
            ]
        }
    ]
}
