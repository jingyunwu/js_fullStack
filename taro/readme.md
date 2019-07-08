- 小程序为什么要框架？
  原生写小程序 有组件化，但是语法很怪，vue, react开发者，学习成本高
  taro(react)   mpvue(vue)  让开发者不用学习小程序就可以写了。
  命令行工具，可以安装一堆的npm 包，极大的扩展了小程序的功能
  compile  src ->  dist/

- JSX
  XML  in  JS ,  react  template 的新语法
  JSX -> babel -> preset  react  -> JS
  render()
  { 
    return (

    )
  }

  react 没有 v-for v-if 指令
  原生JS写
  <view>
  {
    this.state.list.map((item, index) => {
      return (
        .....
      )
    })
  }
  </view>