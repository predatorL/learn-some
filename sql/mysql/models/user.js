
(async () => {
    const tpl_res = await req_tpl.get('group.tpl');
    const actionMap = {
        edit: 'onEdit',
        add: 'onCreate',
        delete: 'onDelete'
    };
    new Vue({
        el: '#app',
        template: tpl_res.data,
        methods: {
            onQuery() {},
            onCreate() {},
            // 可以在这过滤各种参数
            tableActionHandle(action, row, scope) {
                console.log(actionMap, actionMap[action]);
                this.curr.action = action;
                this.curr.item = row;
                this.curr.scope = scope;
                this[actionMap[action]]();
            },
            onEdit() {
                this.dialog.form = {
                    ...this.curr.item
                };
                this.dialog.visible = true;
            },
            onCreate() {
                this.curr.action = 'add';
                this.curr.item = {};
                this.curr.scope = {};
                this.dialog.form = {};
                this.dialog.visible = true;
            },
            onDelete() {
                console.log();
            },
            closeDialog() {
                console.log(this.dialog.form);
                this.dialog.visible = false;
            },
            async groupUpdate(row) {
                console.log(row, source);
                req_group.post('/', { params: this.form });
            },
            async groupDelete(row) {
                const res = await request(
                    req_group.delete('/', {
                        params: {
                            id: row.id
                        }
                    })
                );
                if (!res.status) {
                    console.info(
                        `请求错误, 错误码: ${res.error.response.status}`
                    );
                    return;
                }
                this.getList();
            },

            async onSubmit() {
                const res = await request(
                    req_group.post('/', { params: this.form })
                );
                if (!res.status) {
                    console.info(
                        `请求错误, 错误码: ${res.error.response.status}`
                    );
                    return;
                }
            },
            async getList() {
                const res = await request(req_group.get('/'));
                if (!res.status) {
                    console.info(
                        `请求错误, 错误码: ${res.error.response.status}`
                    );
                    return;
                }
                const { data } = res.response.data;
                this.table.data = data;
            }
        },
        mounted() {
            this.getList();
        },
        data: {
            querys: {
                content: ''
            },
            activeName: 'first',
            curr: {
                action: '',
                item: {},
                scope: {}
            },
            form: {
                name: '',
                description: '',
                note: ''
            },
            table: {
                props: [
                    {
                        label: '分组名称',
                        width: 180,
                        prop: 'name'
                    },
                    {
                        label: '分组描述',
                        width: 180,
                        prop: 'description'
                    },
                    {
                        label: '分组备注',
                        prop: 'note'
                    },
                    {
                        label: '操作',
                        actions: [
                            {
                                text: '编辑',
                                method: 'edit'
                            },
                            {
                                text: '删除',
                                method: 'delete'
                            }
                        ]
                    }
                ],
                data: []
            },
            dialog: {
                visible: false,
                form: {}
            }
        }
    });
})();
