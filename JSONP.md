## 什么是JSONP
JSONP就是一个动态标签跨域请求，简单来说就是script标签+callback参数
  
请求方（浏览器）：在页面中请求一个script，为了让后端知道我想要执行什么代码加入一个callback参数

响应方（服务器）：后台根据这个callback参数构造一个函数调用，并把数据放在第一个参数里，再call一下
## 历史过程（为什么用script标签）
1. 首先使用了form表单，但每次提交都会刷新页面
2. 接着尝试了image标签，但它只知道提交是成功还是失败，无法获取其他数据
3. 用script标签，在如何让后端知道我要执行什么代码方面加入了一个callback的参数
## JSONP为什么不支持POST
因为JSONP是通过动态创建script实现的（script中的src属性只能写入url，而url可以写入get数据无法写入post），而动态创建script只能用GET不能用POST。