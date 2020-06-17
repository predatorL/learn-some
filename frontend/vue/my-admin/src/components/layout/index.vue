<template>
  <div class="app-wrapper">
    <app-sidebar @trigger-switch="toggleSide"/>
    <div class="container">
      <app-header />
      <div class="con-body">
        <router-view class="module-name"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './header'
import appSidebar from './sidebar'

export default {
    methods: {
        // sidebar切换
        toggleSide() {}
    },
    components: {
        appHeader,
        appSidebar
    },
    data() {
        return {}
    }
}
</script>
