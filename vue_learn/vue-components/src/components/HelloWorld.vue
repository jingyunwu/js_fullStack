<template>
  <div class="hello">
    <Menu></Menu>
    <Button size="small" @on-click="handle">按钮</Button>
  </div>
</template>

<script>
import Button from './com/button'
import Menu from './com/menu'
export default {
  name: 'HelloWorld',
  provide () {
    return {
      name: this.obj
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: {
        name: '蜗牛'
      }
    }
  },
  components: {
    Button,
    Menu
  },
  methods: {
    handle (val) {
      console.log(val)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
