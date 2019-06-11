<template>
  <div class="container">
    <child @wn='getWn'></child>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'demoChild2',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getWn (data) {
      console.log(data);
      this.msg = data;
    }
  },
  
}
</script>
