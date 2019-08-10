# 技能思路

- 购物车
  Goods > GoodsItem
  共享数据 库存 -> 购物车
  - 组件让我们从容地进行页面划分
  - vuex data (组件私有) 不适合放共享数据，
    props父子组件传值， 但是event bus 不如 vuex
    computed 从中央到地方的对节点
  - 
    store   module(products.all) []
    mapState({ products: state => state.products.all })

    all <- mutation <- action axios 请求 (后端api)
    modules state.products.all
    dispatch('products/getAllProducts') -> action -> api ->mutations -> state -> MVVM
