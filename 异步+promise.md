## 前段经常遇到的异步（调用图片）
//获取到的图片宽度为0
```
document.getElementByTagName('img')[0].width 
console.log('done')
```
解决方法：回调一下（在onload事件里拿到图片宽度，其他地方是取不到宽度的）
```
var img = document.getElementByTagName('img')[0]
img.onload = function(){
    var w = img.width
    console.log(w)
}
console.log(img.width)
```
## 面试题中的异步（在onclick事件中取到i）
下面用var声明i，依次点击li会打印出5个5
```
let liList = document.querySelectorAll('li')
var i
for (i=0;i<liList.length;i++){
    liList[i].onclick = function(){
        console.log(i)
    }
}
```
解决方法：用 let i 替换 var i，就会分别打印出 0、1、2、3、4
```
let liList = document.querySelectorAll('li')
for (let i=0;i<liList.length;i++){
    liList[i].onclick = function(){
        console.log(i)
    }
}
```
## AJAX中的异步
```
$.ajax({
    url:'1',
    async: true,
    success:function(responseText){
        console.log(responseText)
    }
})
console.log('请求完毕')
```
### 异步的形式(通常使用回调拿到异步结果)
## 回调的形式（promise的then形式）
1. promise是一种回调形式，好处是不需要想参数，固定了参数名为then
2. Promise也是一个事务管理器。他的作用是将各种内嵌回调的事务用流水形式表达，其目的是为了简化编程，让代码逻辑更加清晰。
3. promise有两个重要方法：

then，将事务添加到事务队列（allAffairs）中

resolve，开启流程，让整个操作从第一个事务开始执行
```
$ajax({
    url:'/xxx',
}).then( ()=>{},()=>{} ).then( ()=>{} )
```
## 如何处理异常（用catch写一个失败的函数来兜底）
catch等价于then(undefined,e)，catch是一个没有成功函数的失败函数（语法糖）
eg:
```
axios({
    url:'',
    async:true,
}).then((x)=>{
    console.log('成功')
    return Promise.reject('reject666')
},(y)=>{
    console.log('失败')
}).then((x)=>{
    console.log('成功2')
}).catch((x)=>{
    console.log('catch')
    console.log(x)
})                        //打印出 成功 catch reject666
```
## 自己写promise
```
function ajax(){
    return new Promise((resolve,reject)=>{  //重要的一行，请背过！！
        要做的事情
        如果成功就调用resolve函数
        如果失败就调用reject函数
    })
}
var promise = ajax()
promise.then(successFn,errorFn)
```
## async和await(两者关系是相互依赖)
### await的作用是模拟同步的代码，即用同步的形式来写异步代码，这样就不用回调了。
```
function buyFruit(){
    return new Promise((resolve, reject)=>{
        做事
        如果成功就调用 resolve
        如果失败就调用 reject
    })
}

var promise = await ajax()  //await将一行代码断开，左边是同步，右边是异步的，有了await它会等待异步的结果，从而改变了整个代码的执行顺序,await后接一个返回promise的函数
```
### async 若一个函数里有await，说明它是一个异步操作，那么函数外最好有一个async来显式说明这是一个异步函数
```
async functon fn(){
    var result = await buyFruit()
    return result
}

var r = await fn()
console.log(r)
```
## try...catch捕获报错信息
```
function buyFruit(){
    return new Promise((resolve,reject)=>{
        setTimeOut(()=>{
            reject.call()
        },10000)
    })
}

try{
    var result = await buyFruit()
    console.log('没错')
}catch(ex){
    console.log('异常了')
}   //异常了
```


