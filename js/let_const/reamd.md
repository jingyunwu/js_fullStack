# 作用域 Scope
document DOM
   getElementsByTagName
   getElementsByClassName
   querySelector
   querySelectorAll
window BOM
   全局定义了  var name = "yh";
   全局变量 前端 js的全局就是window
   局部变量 function() {}
   window js是内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于 有一个顶级的window
   全局变量挂载在window上   console.log(name);   console.log(window.name);
   window 类型 对象  typeof 
   基本类型: 数值，字符串，布尔，null, undefined , symbol , object.
   const let 比var 优秀的地方 遵守块级作用域
   全局 ->函数局部 -> 块级作用域
   scope即范围


   setTimeout 异步的内置函数
   for 循环 立即执行的 
   1000 之后 i 在 var 时 变成了10  
   使用 let 的时候 是块级作用域 for {块级作用域 let } 1000 后，
