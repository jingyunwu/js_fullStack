## 界面大框架及经验

水平方向一般禁止滚动条，垂直方向出现滚动条 
- 水平和垂直两个方向都滚动，页面摇晃，容易产生误操作
- 垂直方向滚动是开发的趋势/主要方式
overflow-x: hidden; overflow-y: scroll;



- margin:0 auto ;  max-width: 960px   (通用)美元
- flex 布局
  flex-grow放大     flex-basis     flex-shrink缩小     flex-wrap
  当网页由PC到mobile时，缩小阵仗


经验: 简单的适配PC -》mobile 要照顾所有的用户
PC 大手大脚一点， max-width magin: auto
padding margin
mobile flex-shrink 让关键部分坚挺一点
