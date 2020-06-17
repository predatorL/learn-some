<template>
  <el-card class="demo-card">
    <div slot="header">
      <span>mixins</span>
    </div>
    <div>
      <p>mixins 选项接受一个混入对象的数组。这些混入实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。</p>
    </div>
    <l-table @trigger="onTrigger" :tableData="table.data" :tableProps="table.props"/>
  </el-card>
</template>
<script>
import {
    table as mixinsTable,
    pagination as mixinsPagination
} from '@/lib/mixins'
export default {
  mixins: [mixinsTable(), mixinsPagination()],
    methods: {},
    data() {
        return {
            table: {
                filterKeys: ['name', 'address'],
                data: [],
                source: [],
                props: [
                    {
                        prop: 'date',
                        label: '日期'
                    },
                    {
                        prop: 'name',
                        label: '姓名'
                    },
                    {
                        prop: 'address',
                        label: '地址'
                    }
                ]
            }
        }
    }
}
</script>
