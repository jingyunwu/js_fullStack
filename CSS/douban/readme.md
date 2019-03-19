- css 命名词汇
  feeds feed-item *-item  content
- html结构及布局
从上到下，从左到右，语义化和功能性
   1. 套路
   content>h3+p
   2. 舍得做盒子
   3. a 作为盒子，在移动端是很正常的，比较小
    display:block 
   4. 盒子模型
   文字line-height padding margin 
   5. 文字截断
     tmall 商铺信息是由商家填的，它的高度，不被限制，
     display:-webkit-box;新的盒子模型，像flex来划分
     父元素的空间。
     overflow:hidden;
     -webkit-line-clamp  行数
     -webkit-box-orient:vertical

   6. 浮动   float: left | right 
   离开文档流
   在一个盒子里 ，将要浮动的元素写在最前面，
   左右布局，
   在flex 布局之前，我们一般借助于float 来布局 
   图片的宽高?  宽度用百分比，自适应的需求，
   高度怎么做?  div padding-top : 自身的宽度来做比例100%  即正方形
   自适应设备里盒子的等比例设置 width 百分比，
   高度用padding-top


   界面 ，切分 切图
   按模块来切  .feed-item  词汇量
   块级元素来做盒子  不要在意那些细节，
   从外到内，从上到下，从左到右，
   写良好结构及语义化的html,
   .feed-content>.photos+h3+p+.author





    





