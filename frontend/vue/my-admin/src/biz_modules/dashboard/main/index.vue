<template>
    <div class="index">
        <el-row class="stats">
            <el-col :span="6">
                <el-card>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>

<script>
export default {
    methods: {
        onTrigger() {}
    },
    data() {
        return {}
    }
}
</script>
