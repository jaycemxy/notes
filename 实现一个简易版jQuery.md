# 需求：实现一个简易版的jQuery，有两个API接口

1. addClass():可将所有div添加一个名为red的class

2. setText():可将所有div的textContent变为hi

# 思路：

构造出一个新的函数，这个函数接受一个参数（参数可以是节点或选择器）随后返回一个方法对象，该对象包含addClass和setText两个API接口。在此之上，便可以使用$div调用addClass和setText两个属性去操作这个节点或选择器。

# 实现步骤：

1. 首先在window中添加一个全局属性jQuery：

    window.jQuery = function() {}

2. 获取元素并判断元素类型

    window.jQuery = function(nodeOrSelector){
        let nodes = {}
        if (typeof nodeOrSelector === 'string'){
            nodes = document.querySelectorAl(nodeOrSelector)    //若参数是字符串，那么就是选择器
        } else if (typeof nodeOrSelector instanceof Node){
            nodes = {nodeOrSelector}       //若参数是node节点，那么就直接返回nodeOrSelector里的内容
        }
    }

3. 设置一个名叫addClass和一个名叫setContext的API

    let alldiv = document.querySelectorAll(selector)       //伪数组
    return{
        addClass:function (value) {
            for(let i = 0; i < allDiv.length; i++) {
                alldiv[i].classList.add(value)
            }
        }
        setContext:function (text) {
            for(let i = 0; i < allDiv.length; i++) {
                alldiv[i].textContent = "text"
            }
        }
    }
4. 改个名字（给个缩写alias）

    window.$ = jQuery

    var $div = $('div')         //在声明这个对象时，加上一个$符号表示是由jQuery构造出来的对象，为了与DOM的API相区分，好处是可以时刻提醒我们这个对象是jQuery构造的。

    $div.addClass('red')        //为所有div添加名为red的class 

    $div.setContext('hi')       //为所有div设置文本内容为hi

5. 整段代码如下：

```js
var jQuery = function (nodeOrSelector) {
  var nodes = {};
  if (typeof nodeOrSelector === 'string') {
    nodes = document.querySelectorAl(nodeOrSelector);
  } else if (typeof nodeOrSelector instanceof Node) {
    nodes = {
      nodeOrSelector,
    };
  }
  let allDiv = document.querySelectorAll(nodes);
  return {
    addClass: function (value) {
      for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].classList.add(value);
      }
    },
    setContext: function (text) {
      for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].textContent = text;
      }
    },
  };
};

var $ = window.$ = jQuery;

var $div = $('div');

$div.addClass('red');
$div.setContext('hi');
```