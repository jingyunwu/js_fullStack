基于 vue 2.0 + Vuex + VueRouter 全家桶实现方案来模拟网易云音乐WebApp项目
CSS预编译工具使用的是Sass, 音乐上下滚动加载用的是betterscore, 全面采用ES6风格代码。

解决了哪些问题
- 图片懒加载   vue-lazyload
- 前后端分离
  使用node.js  NeteaseCloudMusicAPI  proxy
  8080 + 3000
- fastclick   解决点击300ms延迟 在touchend后   
- 设计了store
  songs  index  song  singer  mode   favoriteList
  searchHistory   playHistory
- iconfont
- eslint

前后端配合  项目经验
1. 前后端分离 跨域解决方案，按API文档的约定来开发
2. 服务于产品和运营的需求，设计API


- 上班，vue项目，分析清楚目录结构
  1. components/  跟路由挂钩 
    工作的入口
  2. store/ 全局共享 分模块  了解关键状态
  3. common/ 公共组件不用写
  4. api/ 前后端的协作方式
  
