## 声明变量
```
var a = new Object()  //ES5
var b = Object.create(null)  //ES6 真正的空对象
var c = Object.create(Object.prototype)  //ES6写法完全等价于第一行
var d = {}  //等价于声明变量a
```
### 变量声明的缩写
```
var a = 1;                  
var b = 2; 
var object = {   
    a:a,
    b:b
}

等价于
var object = {
    a,
    b
}
```
## 用变量做属性名（如何动态使用键名）
```
var name ='a'
var object = {[name]:1}
```
### 是否可以实现a===1 && a===2 && a===3 ？
```
var i = 0
Object.defineProperty(window,'a',{
    get(){
        i += 1
        return i
    },
})
```
## 对象与对象间的浅拷贝
ES5:
```
var obj1 = {a:1,b:2,c:3}
var obj2 = {}
for(let key in obj1){
    obj2[key] = obj1[key]
}
obj2 === obj1  //false
```
ES6:
```
var obj1 = {a:1,b:2,c:3}
var obj2 = Object.assign({},obj1)
var obj3 = {...obj1}  //obj2和obj3都是对obj1的浅拷贝
```
## 如何获取一个对象的原型
```
a.__proto__  //不推荐！！！
Object.getPrototypeOf(a)  //推荐写法,获取原型
Object.create()  //推荐写法,设置原型
```
## Object.defineProperty()属性
```
var newObject = {
    get x(){},
    set x(value){}  //这里需要给set传入一个value值
}
newObject.x  //走get方法读取
newObject.x = 1  //走set方法写入
```
### 两种方式做到只读(表现相同，只是实现机制不同)
i.
```
o = {
    get name(){return'jayce'}
}
```
ii.
```
Object.defineProperty(o,'name2',{value:'jayce',writable:false})
```
