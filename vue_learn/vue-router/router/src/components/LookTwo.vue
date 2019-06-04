<template>
  <div class="look">{{message}}
    <p>接受的参数: {{$route.params.userId}}</p>
  </div>
</template>


<script>
export default {
  name: 'look',
  data () {
    return {
      message: '看你好帅！'
    }
  }
}
</script>
