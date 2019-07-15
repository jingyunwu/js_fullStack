## context
跨组件间的数据传递
this.props
父组件  -> 子组件 -> 孙
context 可以 直接 父 -> 孙
被 react-router  react-redux 广泛使用
15.0 跟 16.0以后 两个版本

## 15.0 存在的问题
shouldComponenetUpdate
尽可能的少渲染
return true
return false 不更新
如果中间某个组件 shouldComponenetUpdate false 后代组件不会更新

## 16.0 
  解决了 shouldComponenetUpdate 这个问题