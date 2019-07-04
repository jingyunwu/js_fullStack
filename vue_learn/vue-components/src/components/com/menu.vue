<template>
  <div class="menu">
    {{message}} {{app.user}} {{name.name}}
  </div>
</template>


<script>
import bus from '@/bus/bus'
export default {
  inject: ['app','name'],
  data() {
    return {
      message: ''
    }
  },
  created() {
    let self = this
    bus.$on('todo', (val) => {
      console.log(val)
      self.message = val
    })
  },
}
</script>

<style>

</style>

