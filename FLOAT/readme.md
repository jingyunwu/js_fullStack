# 清除浮动的几种方法
 1. 在父元素底部加一行代码 <div style="clear:both"></div>

 2. 利用BFC 简称为"块级格式化上下文" 来给父元素增加css 
    div.content {
        overflow:hidden; 或者  overflow:scroll  或者 overflow:auto;
    }


 3. 使用css 中的after伪元素，给父元素添加一个clearfix的类名
 .clearfix::after {
     content:'';
     clear:both;
     display:block;
 } 


 4. 给父元素增加一行css   不建议使用，如果下面还有元素就会出问题
 .content {
     float: left;
 } 


 5. 一个更优雅的改进 --尼古拉斯大师 方法
    把display设置为table,可以创建一个表格单元，这个匿名的表格单元可以直接触发BFC,
 .clearfix::after {
     content:'';
     display:table;
     clear:both;

 }  