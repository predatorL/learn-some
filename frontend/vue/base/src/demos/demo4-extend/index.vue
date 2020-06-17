<template>
  <el-card class="demo-card">
    <div slot="header">
      <span>模板语法</span>
    </div>
    <div>
      <p>普通文本: {{tpl_info.text}}</p>
      <p>原始 HTML: {{tpl_info.rawHTML}}</p>
      <p>借助v-html转义的:
        <span v-html="tpl_info.rawHTML"></span>
      </p>
    </div>
  </el-card>
</template>
<script>
export default {
    methods: {},
    data() {
        return {
            tpl_info: {
                text: '文本',
                rawHTML:
                    'Using mustaches: <span style="color: red">This should be red.</span>'
            }
        }
    }
}
</script>
