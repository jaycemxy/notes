1. 盒模型

  分为content-box和border-box，content-box的宽度为内容区宽度，border-box宽度为内容区宽度+padding宽度

  举例说，页面中有一个div，给div一个宽度100px，一个padding为20px，那么这个div所占宽度就是100px加上两个20px的padding

2. CSS reset和normalize CSS的区别
 
   - reset是重置，抛弃了默认样式，之前的样式我都不要
   - normalize让浏览器的标签都跟标准规定的默认样式一致，各浏览器上的标签默认样式基本统一
3. 如何居中

  - 水平居中

    内联元素：爸爸身上写text-align:center;
  
    块级元素：margin-right: auto; margin-left: auto;
  - 垂直居中(demo详见demos文件)
    
    a、table自带功能

    b、div装成table

    c、translate: (-50%，-50%);

    d、margin:auto;

    e、flex
4. 选择器优先级如何确定？
   - 选择器越具体，优先级越高
   - 同样优先级，写在后面的覆盖写在前面的
   - color:red; !important优先级最高，但是不要轻易使用important
5. BFC是什么？

   - overflow:hidden; 清除浮动（但是建议用.clearfix）
   -  overflow:hidden; 取消父子margin合并（建议用padding-top:0.1px;）
6. 如何清除浮动
  - overflow:hidden;（不建议用）
  - .clearfix写在爸爸身上
```
    .clearfix{
        content:'';
        display: block;
        clear: both;
        zoom : 1;   /*兼容IE的*/
    }
```