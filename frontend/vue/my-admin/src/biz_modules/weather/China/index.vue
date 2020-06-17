<template>
    <div class="list">
        <el-form :inline="true" class="query-content">
            <el-form-item label="">
                <el-input v-model="querys.content" size="small" placeholder="请输入内容..."></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" icon="el-icon-search" @click="doQuery">搜索</el-button>
            </el-form-item>
        </el-form>
        <div class="table-content">
            <l-table @trigger="onTrigger" :tableData="table.data" :tableProps="table.props"></l-table>
        </div>
        <div class="pagination-content">
            <l-pagination @update="pageChange" :count="pageInfo.count" :page="pageInfo.page" :page-size="pageInfo.page_size"></l-pagination>
        </div>
    </div>
</template>

<script>
import mixin_table from '@/mixins/table'
import { listCfg } from './confs/table'
import services from './services'
export default {
    mixins: [mixin_table()],
    methods: {
        getList() {
            return services.get()
        },
        onQuery() {},
        onTrigger(...params) {
            console.log(params)
        },
        pageChange(type, val) {}
    },
    mounted() {
        this.updateList()
    },
    data() {
        return {
            table: {
                props: listCfg()
            }
        }
    }
}
</script>
