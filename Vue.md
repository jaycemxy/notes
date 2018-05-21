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
## Vue的11个生命周期钩子
beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed、errorCaptured
## Vuex的作用
使用Vuex解决了一下两个问题
- 组件之间的数据通信
- 使用单向数据流的方式进行数据的中心化管理（所谓的单向数据流，就是当用户进行操作的时候，会从组件发出一个 action，这个 action 流到 store 里面，触发 store 对状态进行改动，然后 store 又触发组件基于新的状态重新渲染）

我们不好说为什么使用Vuex，但是如果在下面这种情况下不使用Vuex，将会带来很多弊端：

假设在一个app里有四个tab，每个tab都需要获取用户的资料，如果数据在每个tab组件里都保存了一份，那么用户在手动更新了资料后，这四个tab都需要更新一遍用户资料来保证用户在每个地方看到的数据永远都是最新的。如果说每进一次tab都重新请求一下：

对于服务器来说，频繁请求数据会耗用很多资源，如果该app的用户数量足够多，那么每多出来的一次请求，对于公司来说都是一笔巨大的开支，但是如果数据都储存在store中，并且这四个tab读取的都是同一份数据，那么在用户更新了资料时，只需要更新store中的数据，这样在进这四个不同的tab时，就减少了四次请求
