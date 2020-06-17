<template>
  <div class="demo">
    <el-card class="demo-card">
      <div slot="header">
        <span>单个插槽，slot直接插入</span>
      </div>
      <cmpt1>
        <div>这里是插入的内容</div>
      </cmpt1>
    </el-card>
    <el-card class="demo-card">
      <div slot="header">
        <span>具名插槽, 除了默认的，还可以指定位置</span>
      </div>
      <cmpt2>
        <div slot="slot1">这里是slot1插入的内容</div>
        <div>这里是插入的内容</div>
        <div slot="slot2">这里是slot2插入的内容</div>
      </cmpt2>
      <hr />
      <h4>
        特殊情况1,具名slot和默认slot互插<br/> 结论: 具名的插入默认的会被默认同化（当做默认的直接处理，忽视slotName）,<br/> 具名的插入具名的会被父级具名同化（当做内部的直接处理，忽视slotName），
        <br/> 只有处于组件内部一级节点（子节点）,slotName才会生效
      </h4>
      <ol>
        <li>
          <cmpt2>
            <div>
              <div slot="slot1">这里是slot1插入的内容</div>
              这里是插入的内容
              <div slot="slot2">这里是slot2插入的内容</div>
            </div>
          </cmpt2>
        </li>
        <li>
          <cmpt2>
            <div>
              <div slot="slot1">这里是slot1插入的内容</div>
              <div slot="slot2">这里是slot2插入的内容</div>
              这里是插入的内容
            </div>
          </cmpt2>
        </li>
        <li>
          <cmpt2>
            <div slot="slot1">
              这里是slot1插入的内容
              <div>
                这里是插入的内容
              </div>
              <div slot="slot2">这里是slot2插入的内容</div>
            </div>
          </cmpt2>
        </li>
      </ol>
    </el-card>
  </div>

</template>
<script>
import cmpt1 from './cmpt1'
import cmpt2 from './cmpt2'
export default {
    methods: {},
    components: {
        cmpt1,
        cmpt2
    },
    data() {
        return {}
    }
}
</script>
