1. 如何理解html语义化
  
  一开始写html的是后端程序员，他们不会CSS，于是用table来布局，但table是展示表格用的，严重违反了html语义化；后来有了专门写CSS的前端程序员，他们会使用div+CSS来布局页面，主要用float的绝对定位来布局，这稍微符合了一点语义化；再后来，前端专业化，知道了HTML各个部分的用法，于是就可以用恰当的标签来展示相应内容，而不是一见到一块内容就用div，尽量使用p标签表示段落、main表示主要内容、页边栏用aside、标题用h1、h2等。

2. meta viewport做什么用的？
  
  控制页面在移动端不要缩放，简敲meta:vp
  ```
  <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">
  ```
  一开始所有页面都是为PC端准备的，乔布斯推出了iPhone3GS，页面是不适应手机屏幕的，所以苹果工程师想出了一个办法，默认手机模拟成980px，从而将页面缩小；后来智能手机普及，这个功能部分网站不需要，所以用meta:vp让手机不要缩小网页。

3. Canvas元素 参考canvas-demo项目