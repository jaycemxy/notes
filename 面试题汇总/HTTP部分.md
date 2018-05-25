1. http状态码
- 200 OK 请求成功
- 301 Moved Permanently 永久重定向，浏览器会记住
- 302 Moved Temporarily 临时重定向，浏览器不会记住
- 401 Unauthorized 请求未经授权
- 403 Forbidden 服务器已经理解请求，但是拒绝执行它
- 404 Not Found 请求失败，请求的资源未被在服务器上发现
- 500 Internal Server Error 服务器发生不可预期的错误
- 503 Server Unavailable 服务器当前不能处理客户端请求，一段时间后可能恢复正常
2. HTTP缓存怎么做？
- Cache-Control：max-age = 300
- http://cdn.com/1.js?v=1 避开缓存
3. cookie和session是什么？
- cookie：HTTP响应通过set-cookie设置cookie；浏览器访问指定域名时必须加上cookie作为Request Header请求头；cookie一般用来记录用户信息
- session：是服务器端的内存；一般通过在cookie里记录SessionID实现；SessionID一般是随机数
4. Localstorage和cookie的区别
- cookie会随着请求被发到服务器上，而Localstorage不会
- cookie的大小一般在4k一下，而Localstorage一般在5MB左右
5. GET和POST的区别？
- 参数。GET参数放在url的查询参数里并且有长度限制（一般是1024个字符），POST的数据放在请求消息体里没有限制（4-10MB限制）
- 安全。GET相对来说没有POST安全（两个都不怎么安全）
- 包。GET请求只需发一个包，POST请求需要发两个以上包（因为POST有消息体）
- GET用来读数据，POST用来写数据并且POST不幂等（幂等：不管发多少次请求结果都一样）
6. 如何跨域？（JSONP、CORS以及postMessage）
- JSONP

网页通过添加一个script元素，向服务器请求JSON数据，这种做法不受同源政策限制；服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。简单来说就是动态添加一个script标签和一个callback的回调函数
- CORS

CORS是跨源资源分享（Cross-Origin Resource Sharing）的缩写，它是跨源AJAX请求的根本解决方法。相比JSONP只能发GET请求，CORS允许任何类型的请求。

简单来说就是服务端在响应头中添加一个 Access-Control-Allow-Origin 的头部，头部的值为客户端的域名，eg：
```
  response.setHeader('Access-Control-Allow-Origin','http://jayce.com:8003')
```
- postMessage
语法：otherWindow.postMessage(message, targetOrigin);

i. otherWindow:指目标窗口，也就是给哪个window发消息，是 window.frames 属性的成员或者由 
window.open 方法创建的窗口

ii. message: 是要发送的消息，类型为 String、Object

iii. targetOrigin: 是限定消息接收范围，可以是*（无限制）或者一个URL

举例父窗口http://aaa.com向子窗口http://bbb.com发送消息
```
var popup = window.open('http://bbb.com', 'title');
popup.postMessage('Hello World!', 'http://bbb.com');
```
子窗口向父窗口发送消息也是类似
```
window.opener.postMessage('Nice to see you', 'http://aaa.com');
```