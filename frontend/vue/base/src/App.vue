<template>
  <div id="app">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">

      <template v-for="(item, index) in navMenus">
        <el-submenu :index="'top_' + index" :key="'top_' + index">
          <template slot="title">{{item.title}}</template>
          <el-menu-item v-for="(subItem, subIndex) in item.subs" :key="[index, subIndex].join('_')" :index="[index, subIndex].join('_')">
            <router-link class="link-item" :to="{ name: subItem.route}">{{subItem.title}}</router-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import pageConf from '@/page-conf'

export default {
    methods: {
        handleSelect() {}
    },
    data() {
        return {
            activeIndex: '0',
            navMenus: pageConf
        }
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
#app {
    width: 95%;
    min-height: 100%;
    overflow-y: auto;
    padding: 10px 20px;
    box-sizing: border-box;
    margin: 0 auto;
    box-shadow: 0 0 2px 1px rgba(3, 3, 3, 0.4);
}
a.link-item:link,
a.link-item:visited,
a.link-item:hover,
a.link-item:active {
    color: #fff;
}

.link-item {
    display: block;
    text-decoration: none;
}
</style>
