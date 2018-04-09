## 什么是AJAX
异步的 JavaScript 和 XML，满足以下三点：
  
  i. 使用 XMLHttpRequest 发请求
  
  ii. 服务器返回 XML 格式的字符串
  
  iii. JS 解析 XML，并更新局部页面
## 使用原生JS写出一个AJAX请求
    let request = new XMLHttpRequest()  //创建一个新对象
    request.open('get','http://jayce.com:8003/xxx')  //配置这个对象
    request.send()  //发送这个对象
    request.onreadystatechange = () =>{  //监听这个对象的readystate变化  
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                console.log('说明请求成功')
                let string = request.responseText
                let object = window.JSON.parse(string)
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
## 同源策略
同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据

只有（协议+域名+端口）一模一样时才允许发 AJAX 请求

eg：
1. http://baidu.com 可以向 http://www.baidu.com 发 AJAX 请求吗？ no协议不同
2. http://baidu.com:80 可以向 http://baidu.com:81 发 AJAX 请求吗？ no端口不一样
## CORS跨域
CORS全称是跨域资源共享（Cross-origin resource sharing）能克服 AJAX 只能同源使用的限制，告诉浏览器我们是一家的别阻止他。

简单来说就是服务端在响应头中添加一个 Access-Control-Allow-Origin 的头部，头部的值为客户端的域名，eg：
  ```
    response.setHeader('Access-Control-Allow-Origin','http://jayce.com:8003')
  ```
## JSONP与AJAX
1. 相同点：ajax和jsonp的调用方式很像，目的一样，都是请求url，然后把服务器返回的数据进行处理

2. 不同点：

   i.AJAX（异步的Javascript和XML）核心是通过XMLHttpRequest请求内容，支持get、post、delete等。（通过CORS可以突破同源政策的限制实现跨域请求）

   ii.JSONP的核心则是通过动态添加script标签来调用服务器提供的js脚本（后缀.json)，只支持get请求。（网页通过添加一个script元素向服务器请求JSON数据，这种做法不受同源政策的限制，服务器在收到请求后，将数据打包放在一个指定名字的回调函数里传回来）

  虽然两者的调用方法和作用看上去很像，但它们本质上是不同的东西。它们的区别也不在于是否跨域，AJAX 也可以实现跨域，jsonp 本身也不排斥同域的数据的获取。      