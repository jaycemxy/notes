1. 如何使用promise
- then的链式用法
```
$.ajax(...).then(successFn,errorFn).then(successFn2,errorFn2)
```
- 自己生成promise对象
```
function xxx(){
  return new Promise(function(resolve,reject){  //关键句
    setTimeout(()=>{
      resolve()  //成功就调
      reject()  //失败就调
    }, 5000)
  })
}

xxx.().then(value)
console.log(value);
```
- await的用法
```
function xxx(){
  return new Promise(function(resolve,reject){  //关键句
    setTimeout(()=>{
      resolve()  //成功就调
      reject()  //失败就调
    }, 5000)
  })
}

var promise = await xxx()  //await左边是同步的，右边是异步的，由await隔开，有了await它会等待异步的结果，从而改变整个代码的执行顺序，await后接一个返回promise的函数
```
- try...catch捕获报错信息

catch是一个没有成功函数的失败函数，相当于then的语法糖
```
function xxx(){
  return new Promise(function(resolve,reject){  //关键句
    setTimeout(()=>{
      resolve()  //成功就调
      reject()  //失败就调
    }, 5000)
  })
}

try{
  var promise = await xxx()
  console.log('没出错')
}catch(error){
  console.log('异常了')
}
```

2. 原生JS写ajax请求
```
let xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.onreadystatechange = function(){
  if(xhr.readystate === 4){
    if(xhr.status >= 200 && xhr.status < 300){
      console.log('说明请求成功')
    }else if(xhr.status >= 400){
      console.log('说明请求失败')
    }
  }
}
xhr.send()
```
3. 闭包是什么
- 定义

首先声明一个立即执行函数，这个函数里有一个变量和一个函数
```
!function(){
  var n = 0
  function createAdder(){
    return n += 1
  }
}()

let adder = createAdder()
adder()  //n === 1
adder()  //n === 2
console.log(n)  //n is not defined
```
在这个立即执行函数里，createAdder函数内部用到了它作用域外的变量n，这个函数和这个变量所在环境就形成了一个闭包

- 作用

间接访问一个变量，也可以说是对外隐藏了一个变量

4. 一段代码里的this是什么？（call一个函数时，给这个函数传入的第一个参数就是this）
- fn()里面的this是window
- fn()是strict mode时，this就是undefined
- a.b.c.fn()中this就是a.b.c即fn前面的东西
- () => console.log(this)，里面的this就是外面的this，外面的this用前三条可以确定

5. 立即执行函数
- 定义
  声明一个匿名函数，并且马上调用这个匿名函数
- 形式
```
!function(){
  ...
}()

(function(){
  ...
}())

~function(){

}
```
- 作用
  创建一个独立作用域，这个作用域内的变量外部访问不到，避免全局污染

6. async/await语法是什么？目的是？
```
function returnPromise(){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve('成功')
    }, 3000)
  })
}

returnPromise().then((result)=>{  //将异步代码
  result === '成功'
})

var result = await returnPromise()  //写成同步
return === '成功'
```
作用：模拟同步代码，即用同步的形式来写异步的代码，这样就不用回调了

7. 如何实现深拷贝
- JSON实现方式
```
var a = {...}
var b = JSON.parse(JSON.stringify(a))
```
将这个对象变成一个字符串，再从字符串里生成一个对象

缺点是JSON不支持函数、引用、undefined、RegExp正则、Date ...
- 递归拷贝（要有clone，并且需要考虑他是Array、Function还是Object）
```
function clone(object){
  var object2
  if(!(object instanceof Object)){
    return object
  }else if(object instanceof Array){
    object2[]
  }else if(object instanceof Function){
    object2 = eval(object.toString())
  }else if(object instanceof Object){
    object2 = {}
  }
  for(let key in object){
    object2[key] = clone(object[key])
  }
  return object2
}
```
8. 如何实现数组去重
- 基数排序的逻辑（只能是正整数）
```
var a = [4,2,5,6,3,4,5]
var hashTab = {}
for(let i=0; i<a.length; i++){
  if(a[i] in hashTab){
    //什么都不做
  }else{
    hashTab[a[i]] = true
  }
}
//hashTab:{4:true, 2:true, 5:true, 6:true, 3:true}
console.log(Object.keys(hashTab))  //['4','2','5','6','3'] 得到的是字符串，想要得到数组用map去遍历
```
- 用Set去重
```
a = [1,3,4,1,3,3,2,1]
Array.from(new Set(a))
-> a = [1,3,4,2]
```
9. 如何用正则实现string.trim()
```
function trim(string){
  return string.trim.replace(/^\s+|\s+$/,'') 
}
```
10. JS原型是什么？
举例说，
- var a = [1,2,3]
- 变量a只有0，1，2，length这4个key
- 但是可以a.push(4)
- 因为a.__proto__ === Array.prototype
- push方法就是沿着a.__proto__找到的，也就是Array.prototype.push
- Array.prototype还有很多方法，例如pop、join、slice、splice等
11. ES6中的class了解吗？
举例说明
```
class Animal {
  constructor(){  //构造自有属性
    this.body = '身体'
  }
  move(){
    console.log('动两下')
  }
}

class Person extends Animal {
  constructor(name){
    super()  //相当于拥有了 this.body = '身体' 这个属性
    this.name = name
  }
  useTools(){}
} 

var p1 = new Person('jayce')
```
12. 如何实现继承？(使用ES6中 extends 关键字)