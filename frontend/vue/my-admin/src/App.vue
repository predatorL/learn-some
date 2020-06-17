<template>
    <div id="app">
        <div class="app-wrapper">
            <app-sidebar @trigger-switch="toggleSide" />
            <div class="container">
                <app-header />
                <div class="con-body">
                    <router-view class="module-name"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from './components/header'
import appSidebar from './components/sidebar'
export default {
    name: 'app',
    methods: {
        toggleSide() {}
    },
    components: {
        appHeader,
        appSidebar
    }
}
</script>

