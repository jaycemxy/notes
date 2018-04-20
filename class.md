## 教义
1. constructor  用来构造自有属性
2. extends  继承
3. super  执行你继承的那个类的constructor
4. new  要生成一个类的实例对象，这个对象前必须要加new
5. this._属性  这是一个隐藏语法get可以获取，set可以设置它
## 一个简易实例
```
class Animal{
    constructor(){  //构造自有属性
        this.body = '身体'
    }
    move(){  //自有属性
        console.log('我可以动哦')
    }
}

class Person extends Animal{
    constructor(name){
        super()  //相当于拥有了Animal这个类的this.body = '身体'这个属性
        this.name = name
        this.age = 18
    }
    walk(){
        console.log('走两步')
    }
}

var p1 = new Person('jayce')  //要生成类的对象，前面必须加new
```
## 对隐藏语法 this._属性 的理解
```
class Person{
    constructor(name){
        this._name = name  //隐藏语法
        this.age = 18
    }
    get name(){  //获取这个隐藏的属性 _name
        return this._name
    }
    set name(v){  //设置这个隐藏属性
        if(v.length > 4){
            console.log('不让你起四个字以上的名字')
        }else if(v.length < 2){
            console.log('你还想叫一个字的名字？厉害死你')
        }else{
            this._name = v
        }
    }
}

var p1 = new Person('jayce')
```
### 如果想要这个属性只可读不可写，先将这个属性设置为隐藏属性，只给他一个get的方法即可
## 公有属性的静态方法static
//static是可以通过类名直接访问的方法
```
class Person{
    constructor(name){
        this.name = name
        this.age = 18
    }
    walk(){
        console.log('走两步')
    }
    static die(){
        console.log('地球毁灭了')
    }
}

var p1 = new Person('jayce')

p1.die  //undefined
person.die  //地球毁灭了
```