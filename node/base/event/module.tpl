<div id="page">
    <h3>同时绑定多个listener,按注册顺序执行</h3>
    <el-form :inline="true" size="mini" :model="form1">
        <el-form-item label="初始值">
            <el-input v-model="form1.val1" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('1')">提交</el-button>
        </el-form-item>
        <el-form-item label="加1">
            <el-input v-model="form1.val2" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="加1加4">
            <el-input v-model="form1.val3" placeholder=""></el-input>
        </el-form-item>
    </el-form>
</div>
