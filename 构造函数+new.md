## JS之父的关怀（构造函数+new）
注释的三行代码是加上new之后可以省去的代码

```
function createSoldier(){
    //this = {} 让this是一个空对象
    //this.__proto__ = createSoldier.prototype
    this.ID = i
    this.生命值 = 42
    this.name = '无名战士'
    //return this
}

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

## 程序猿间的约定
1. 构造函数的首字母大写
2. 构造函数可以省去 create
3. 如果构造函数没有参数，那么可以省略括号
```
function Soldier(){
    this.ID = i //ID不能重复
    this.生命值 = 42
    this.name = '无名战士'
}

createSoldier.prototype.兵种 = "美国大兵"
createSoldier.prototype.攻击力 = 5
createSoldier.prototype.行走 = function(){ /*走两步的代码*/ }
createSoldier.prototype.奔跑 = function(){ /*狂奔的代码*/ }
createSoldier.prototype.死亡 = function(){ /*Go die*/ }
createSoldier.prototype.攻击 = function(){ /*糊他熊脸*/ }
createSoldier.prototype.防御 = function(){ /*护脸*/}

var soldier = []
for(var i=0;i<100;i++){
    soldiers.push(new Soldier())  //没有参数省略括号可写成soldiers.push( new Soldier ）
}

兵营.batchMake(soldiers)
```