export const listCfg = () => {
    return [
        {
            label: '主机名',
            prop: 'hostname',
            width: 160
        },
        {
            label: 'IP地址',
            prop: 'ip',
            width: 160
        },
        {
            label: 'SN',
            prop: 'host_sn'
        },
        {
            label: '变更项',
            prop: 'business_name'
        },
        {
            label: '变更前',
            prop: 'create_time'
        },
        {
            label: '变更后',
            prop: 'create_time'
        },
        {
            label: '变更时间',
            prop: 'create_time'
        },
        {
            label: '操作',
            actions: [
                {
                    icon: 'el-icon-info',
                    method: 'edit'
                }
            ]
        }
    ]
}
