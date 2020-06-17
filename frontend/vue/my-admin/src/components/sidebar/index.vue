<template>
  <header class="sidebar">
     <el-menu default-active="2">
      <template v-for="(memu, topIndex) in menus">
        <!-- 包含二级 -->
        <el-submenu v-if="memu.subs" :key="topIndex" :index="memu.name">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{memu.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(sub, subIndex) in memu.subs" :key="subIndex" :index="memu.name + subIndex">
              <router-link :to="{name: `${memu.name}_${sub[0]}`}">{{sub[1]}}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :key="topIndex" v-else :index="memu.name">
          <i class="el-icon-menu"></i>
          <span slot="title">
            <router-link :to="{name: memu.name}">{{memu.title}}</router-link>
          </span>
        </el-menu-item>
      </template>
    </el-menu>
  </header>
</template>

<script>
import getConfig from './config'
export default {
    data() {
        return {
            menus: getConfig,
            msg: 'sidebar'
        }
    },
    methods: {}
}
</script>
