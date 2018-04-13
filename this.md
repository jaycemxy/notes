## this
简单来说call一个函数时的第一个参数可以用this得到

i. function.call() 显式传入this的值

ii. function()  隐式传入

## 三段论
1. 参数的值只有在传参时才能确定
2. this是call的第一个参数

=>this的值只有在传参时才能确定

## 实例
```
function a(){
    console.log(this)  //this的值不确定，因为并没有给a传参 
}
```

```
a()  //这是一种不传this的隐式写法。在浏览器中this是window，在node下是global，在严格模式下是undefined
```

```
function a(){
    'use strict'  //此处是严格模式
    console.log(this)  //this是undefined，不用call就是隐式传this
}
```

```
var obj ={
    sayThis: a
}
obj.sayThis()  //this是obj，没用call就是隐式传入this
```

this是不确定的，因为没有用call
```
button.onclick = function(){
    console.log(this)  //this值是触发事件的元素，在这里this是button
}

如果自己传参，button.onclick.call({name:'hi'}),这时this就不是button了，所以永远都不要去确定地说this的值是什么
```

```
$('#button').on('click',function(){
    console.log(this)  //this指向的是当前正在执行事件的元素，这里this是button
})
```

```
$('#ul').on('click','li',function(){
    console.log(this)  //对于代理时间而言，this代表了与selector相匹配的元素
})
```

```
var vm = new Vue({
    data:function(){
        console.log(this)  //this是指new出来的对象
    }
})
```

