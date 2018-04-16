## 构造函数constructor
返回一个新构造对象的函数
### 特点：
i.函数体内部使用了this关键字，代表了所要生成的对象实例。

ii.生成对象的时候，必须使用new命令。
## new关键字
new是为了批量操作对象而出现的

当你使用new关键字，new命令会自动帮你执行以下步骤：
1. 创建一个空的临时对象，作为将要返回的对象实例。  //var temp = {}
2. 将这个空对象的原型，指向构造函数的prototype属性。  //this.__proto__ = 构造函数fn.prototype 
3. 将这个空对象赋值给函数内部的this关键字。  //this = temp
4. 开始执行构造函数内部的代码。  //return this
## JS之父的关怀（构造函数+new）
注释的三行代码是加上new之后可以省去的代码

```
// 自有属性
function createSoldier(){
    //this = {} 让this是一个空对象
    //this.__proto__ = createSoldier.prototype
    this.ID = i
    this.生命值 = 42
    this.name = '无名战士'
    //return this
}

//公有属性
//createSoldider.prototype = {constructor:createSolider}
createSoldier.prototype.兵种 = "美国大兵"
createSoldier.prototype.攻击力 = 5
createSoldier.prototype.行走 = function(){ /*走两步的代码*/ }
createSoldier.prototype.奔跑 = function(){ /*狂奔的代码*/ }
createSoldier.prototype.死亡 = function(){ /*Go die*/ }
createSoldier.prototype.攻击 = function(){ /*糊他熊脸*/ }
createSoldier.prototype.防御 = function(){ /*护脸*/}

var soldier = []
for(var i=0;i<100;i++){
    soldiers.push(new createSoldier())
}

兵营.batchMake(soldiers)
```

## 约定
1. 构造函数的首字母大写
2. 构造函数可以省去 create
3. 如果构造函数没有参数，那么可以省略括号
```
function Soldier(){
    this.ID = i //ID不能重复
    this.生命值 = 42
    this.name = '无名战士'
}

Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function(){ /*走两步的代码*/ }
Soldier.prototype.奔跑 = function(){ /*狂奔的代码*/ }
Soldier.prototype.死亡 = function(){ /*Go die*/ }
Soldier.prototype.攻击 = function(){ /*糊他熊脸*/ }
Soldier.prototype.防御 = function(){ /*护脸*/}

var soldier = []
for(var i=0;i<100;i++){
    soldiers.push(new Soldier())  //没有参数省略括号可写成soldiers.push( new Soldier ）
}

兵营.batchMake(soldiers)
```
## 继承的写法
```
function Human(options){
	this.name = options.name
	this.肤色  = options.肤色
}
Human.prototype.eat = function(){}
Human.prototype.drink = function(){}
Human.prototype.poo = function(){}

function Soldier(options){
	// this.__proto__ = Soldier.prototype
    Human.call(this, options)
	this.ID = options.ID
    this.生命值 = 42
}
// createSoldier.prototype = {constructor: createSoldier}
// ie
// function fakeHuman(){}
// fakeHuman.prototype = Human.prototype
// Soldier.prototype = new fakeHuman()
// no-ie
Soldier.prototype = Object.create(Human.prototype)
// 脑中的
// Soldier.prototype.__proto__ === Human.prototype

Soldier.prototype.兵种 = "美国大兵"
Soldier.prototype.攻击力 = 5
Soldier.prototype.行走 = function(){ /*走俩步的代码*/},
Soldier.prototype.奔跑 = function(){ /*狂奔的代码*/  },
Soldier.prototype.死亡 = function(){ /*Go die*/    },
Soldier.prototype.攻击 = function(){ /*糊他熊脸*/   },
Soldier.prototype.防御 = function(){ /*护脸*/       }
// Soldier.prototype.__proto__ = Human.prototype



var s = new Soldier({name: '方方', 肤色:'yellow', ID: 1})

// 1. __proto__ 不能用
// Soldier.prototype.__proto__ = Human.prototype
// Soldier.prototype.__proto__ === this.__proto__ === Human.prototype
```

## 真正的class
```
class Human{
	constructor(options){
		this.name = options.name
		this.肤色  = options.肤色
	}
	eat(){}
	drink(){}
	poo(){}
}

class Soldier extends Human{
	constructor(options){
	    super(options)
		this.ID = options.ID
	    this.生命值 = 42
		this.兵种 = "美国大兵"
		this.攻击力 = 5
	}
	行走(){ /*走俩步的代码*/}
	奔跑(){ /*狂奔的代码*/  }
	死亡(){ /*Go die*/    }
	攻击(){ /*糊他熊脸*/   }
	防御(){ /*护脸*/       }
}
var s = new Soldier({name: '方方', 肤色:'yellow', ID: 1})
```