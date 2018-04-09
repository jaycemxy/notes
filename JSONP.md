## 什么是JSONP
JSONP就是一个动态标签跨域请求，简单来说就是script标签+callback参数

请求方：frank.com 的前端程序员（浏览器）

响应方：jack.com 的后端程序员（服务器）

1. 请求方创建 script，src 指向响应方，同时传一个查询参数 ?callbackName=yyy
2. 响应方根据查询参数callbackName，构造形如
    
    i.yyy.call(undefined, '你要的数据')
    
    ii.yyy('你要的数据')
    
    这样的响应
3. 浏览器接收到响应，就会执行 yyy.call(undefined, '你要的数据')
4. 那么请求方就知道了他要的数据

  
### 结论：

请求方（浏览器）：在页面中请求一个script，为了让后端知道我想要执行什么代码加入一个callback参数

响应方（服务器）：后台根据这个callback参数构造一个函数调用，并把数据放在第一个参数里，再call一下
## 历史过程（为什么用script标签）
1. 首先使用了form表单，但每次提交都会刷新页面
2. 用image构造GET请求（但它只知道提交是成功还是失败，无法获取其他数据）
3. 用script标签构造GET请求（在如何让后端知道我要执行什么代码方面加入了一个callback的参数）
    
## JSONP为什么不支持POST
因为JSONP是通过动态创建script实现的（script中的src属性只能写入url，而url可以写入get数据无法写入post），而动态创建script只能用GET不能用POST。

## 一个完整的JSONP形式
    button.addEventListener('click', (e)=>{
      let script = document.createElement('script')
      let functionName = 'frank'+ parseInt(Math.random()*10000000 ,10)
      window[functionName] = function(){  // 每次请求之前搞出一个随机的函数
          amount.innerText = amount.innerText - 0 - 1
      }
      script.src = '/pay?callback=' + functionName
      document.body.appendChild(script)
      script.onload = function(e){ // 状态码是 200~299 则表示成功
          e.currentTarget.remove()
          delete window[functionName] // 请求完了就干掉这个随机函数
      }
      script.onload = function(e){ // 状态码大于等于 400 则表示失败
          e.currentTarget.remove()
          delete window[functionName] // 请求完了就干掉这个随机函数
      }
    }) 
    
    //后端代码
    ...
    if (path === '/pay'){
        let amount = fs.readFileSync('./db', 'utf8')
        amount -= 1
        fs.writeFileSync('./db', amount)
        let callbackName = query.callback
        response.setHeader('Content-Type', 'application/javascript')
        response.write(`
            ${callbackName}.call(undefined, 'success')
        `)
        response.end()
    }
    ...    

### 约定

1. callbackName -> callback
2. yyy -> 随机数 frank12312312312321325()

    //函数名通常是一个随机数，并且在用完之后会立即删掉
```
$.ajax({
 url: "http://jack.com:8002/pay",
 dataType: "jsonp",
 success: function( response ) {
     if(response === 'success'){
     amount.innerText = amount.innerText - 1
     }
 }
 })

 $.jsonp()