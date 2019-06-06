前端路由实现，核心本质是： 不刷新页面，但是可以在页面上显示不同的内容  单页应用的本质 就是一种用户体验

1. hash 实现，
url #hash 部分的改变 ，不会刷新页面，传统的URL,  /path?queryString 重刷页面的后果是页面打开慢，都是一种独立的HTTP请求
怎么利用它呢？ 动态的加载组件，及发起请求  
js  DHTML 


- 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的慢，白屏(多了HTTP请求, )。
  前端路由可以实现立即加载的 路由对应的组件, 其中最简单的方式是hashchange 
  http://localhost:8080#a 


- route-link组件
to="#/"  即props
home 即slot 插槽



