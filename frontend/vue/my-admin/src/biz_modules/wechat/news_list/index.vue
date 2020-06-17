<template>
    <div class="list">
        <el-form :inline="true" class="query-content">
            <el-form-item label="">
                <el-input v-model="querys.content"  size="small" placeholder="请输入内容..."></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size="small" icon="el-icon-search" @click="onQuery">搜索</el-button>
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
import { listCfg } from './assets/table-cfg'
export default {
    methods: {
        onQuery() {},
        onTrigger(...params) {
            console.log(params)
        },
        pageChange(type, val) {}
    },
    data() {
        return {
            querys: {},
            table: {
                source: [],
                props: listCfg(),
                data: [
                    {
                        accessable: true,
                        accessable_status: '\u53ef\u8fbe',
                        agent_ver: 'v2.2.0',
                        arrival_time: '',
                        business_id: null,
                        business_name: null,
                        create_time: '2017-12-21 09:50:02',
                        host_sn: '2102310LXP10E3101611',
                        hostname: 'localhost.localdomain',
                        hypervisor: true,
                        id: 10,
                        ip:
                            '10.0.0.204;10.0.0.244;10.0.0.245;10.0.0.246;192.168.122.1;172.17.0.1;172.18.0.1',
                        lose_time: null,
                        manufacturer: 'Huawei Technologies Co., Ltd.',
                        model: 'Tecal RH2285H V2-12L',
                        modify_time: '2018-01-03 17:00:03',
                        os_type: 'Linux',
                        power_thres: -1,
                        rack_pos: null,
                        status: true
                    }
                ]
            },
            pageInfo: {
                count: 1,
                page: 1,
                page_size: 10
            }
        }
    }
}
</script>
