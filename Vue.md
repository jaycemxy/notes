## 一个组件实例（组件是可复用的Vue实例）
```
Vue.component('定义一个组件名,组件名最好是带小横线的写法，尽量不要使用驼峰命名法button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: `
    <button @click="count++">You clicked me {{ count }}times.</button>
    `
})
```
将这个组件<button-counter>作为自定义元素使用
```
html:
<div id="components-demo">
  <button-counter></button-counter>
</div>

JS:
new Vue({ el: '#components-demo' })
```
除了el这样根实例特有的选项，组件可以接收与new Vue相同的选项，例如：data、computed、watch、methods
## 父子组件通信
父组件通过 prop（down） 给子组件向下传递数据(包括属性和方法)，子组件通过 $emit（up） 触发事件向上给父组件发送消息（传递父组件需要的参数），即 prop 是向下传递，$emit 事件向上传递。
html:
```
<div id="demo">
    <button @click="visible=true">打开</button>
    <child v-show=visible @close="visible=false"></child>
<div>
```
JS:
```
new Vue({  //首先创建一个vue的实例
  el: '#demo',
  data: {
    visible: false  //默认是看不见儿子的
  }
})

Vue.component('child',{  //创建一个名为child的组件
  template:`
  <div>我是儿子
    <button @click="$emit('close')">关闭</button>  //$emit触发事件向上发送消息
  </div>
  `
})
```
![alt text](./img/父子组件通信.jpg)