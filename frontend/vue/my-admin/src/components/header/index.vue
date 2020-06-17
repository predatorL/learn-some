<template>
  <header class="con-header">
    用户名称：{{$store.state.user.name}}
    用户id：{{$store.state.user.id}}
    用户角色：{{$store.state.user.role}}
  </header>
</template>

<script>
export default {
    data() {
        return {
            msg: 'appheader'
        }
    },
    methods: {}
}
</script>
