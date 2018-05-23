1. DOM事件模型
- 冒泡
- 捕获
- 如果这个元素是被点击元素，那么捕获不一定在冒泡之前，顺序是由监听顺序决定的
2. 移动端的触摸事件
- touchstart touchend touchmove touchcancel
- 模拟swipe事件，记录两次touchmove的位置差，如果最后一次在前一次的右边，那么说明向右滑了 
3. 事件委托是什么，好处是？
- 假设父元素有四个儿子，我不去监听四个儿子而是监听父元素，看触发事件的元素是哪个儿子
- 可以监听还没有定义的儿子（动态生成的元素），节省监听器
举例：
```
function listen(element,eventType,selector,fn){
  element.addEventListener (eventType,e => {
    if(e.target.matches(selector)){
      fn.call(el, e.el)
    }
  })
}
```