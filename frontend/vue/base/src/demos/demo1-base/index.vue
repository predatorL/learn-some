<template>
  <el-card class="demo-card">
    <div slot="header">
      <span>模板语法</span>
    </div>
    <div>
      <p>普通文本: {{tpl_info.text}}</p>
      <p>原始 HTML: {{tpl_info.rawHTML}}</p>
      <p>
        借助v-html转义的:
        <span v-html="tpl_info.rawHTML"></span>
      </p>
      <input ref="pic" type="file" @change="uploadImg">
    </div>
    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="(city, i) in cities" :label="city.key" :key="i">{{city.display_name}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </el-card>
</template>
<script>
export default {
  methods: {
    uploadImg(e) {
      const tempData = new FormData();
      tempData.append("picName", this.$refs.pic.files[0]);
      tempData.append("name", "1112312");
      tempData.append("name1", "aaas");
      // tempData 这个玩意就是最后的ajax data
      window.$.ajax({
        url: "http://localhost:8080/",
        success(data, status, xhr) {},
        error(xhr, errorType, error) {},
        processData: false,
        type: "POST",
        data: tempData
      });
    }
  },
  mounted() {},
  data() {
    return {
      tpl_info: {
        text: "文本",
        rawHTML:
          'Using mustaches: <span style="color: red">This should be red.</span>'
      },
      checkList: [1, 3],
      cities: [
        { key: 1, display_name: "海外房产" },
        { key: 2, display_name: "海外移民" },
        { key: 3, display_name: "贷款" },
        { key: 4, display_name: "房屋托管" }
      ]
    };
  }
};
</script>
