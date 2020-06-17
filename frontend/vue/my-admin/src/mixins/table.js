export default hasPagination => {
    const pagination = {
        methods: {},
        data() {
            return {
                pageInfo: {
                    count: 1,
                    page: 1,
                    page_size: 10
                }
            }
        }
    }
    const table = {
        methods: {
            doQuery() {
                this.table.source = []
                this.table.data = []
                this.updateList()
            },
            updateList() {
                this.getList().then(res => {
                    const { data } = res.data
                    this.table.data = data
                    this.table.source = data
                })
            }
        },
        data() {
            return {
                table: {
                    source: [],
                    data: []
                }
            }
        }
    }
    const querys = {
        methods: {},
        data() {
            return {
                querys: {}
            }
        }
    }
    return {
        methods: {
            ...table.methods,
            ...querys.methods,
            ...pagination.methods
        },
        data() {
            return {
                ...table.data(),
                ...querys.data(),
                ...pagination.data()
            }
        }
    }
}
