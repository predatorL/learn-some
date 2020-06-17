<template>
  <div class="cmpt-2">
    <slot name="slot1"></slot>
    <h3>开头</h3>
    <slot></slot>
    <h3>结尾</h3>
    <slot name="slot2"></slot>
  </div>
</template>

<script>
export default {
    methods: {},
    mounted() {
    },
    data() {
        return {}
    }
}
</script>
