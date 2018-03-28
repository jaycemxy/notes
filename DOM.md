## 对DOM的理解
1. DOM通过构造函数（Document、Element、Text）将HTML文档变成对象展现到内存中。
2. DOM的D指的是Document（可认为是HTML文档）；O指的是Object，他是在内存中按照树型结构，通过构造函数，构造出对象展现在内存里；M指的是Model，因为在内存中HTML结构不好表示，所以用一个模型（树型结构）来表示。
3. JavaScript将HTMl文档渲染成了DOM的树型结构。
4. 有了树型结构，如何获取节点？

   i. 直接在DOM中寻找：docunment.querySelector(xxx);
      document.querySelectorAll(xxx)

   ii. 通过节点关系获得：a.兄弟节点 sibling；b.儿子 child；c.父关 系 parent
5. 获得节点后，了解获得的节点是什么？

   i. Node.nodeName（返回一个包含该节点名字的DOMString）

   ii. Node.nodeType（返回值1表示元素；3表示文本；9表示document）

   iii. Node.textContent（获取或设置一个标签内所有子结点及其后代的文本内容）
6. 是否可以通过DOM的API修改DOM结构？

   i. 创建节点

     document.creatElement("div")生成Elemnet节点

     document.creatTextNode("你好，我是马心悦")生成Text节点

   ii. 通过Node方法将创建的节点拼接到DOM中（mdn文档）

    Node.appendChild();Node.cloneNode();Node.isSameNode()等
7. DOM的API无外乎增删改查。
  
   增:Node.setAttribute("属性名", "属性值")

   删: Node.removeAttribute("属性名")

   改: Node.setAttribute("已经存在属性名", "新属性值")

   查:Node.getAttribute("属性名")
***
## Node接口的一些属性和方法
### Node属性
1. 节点自身某些特征属性

   i. node.nodeName
    
    返回当前节点的节点名称
    
   ii. node.nodeType
    
    返回节点类型,重要的返回的值有大写的HTML元素名, #text ,#document

   iii. node.textContent

     返回的当前节点及其所有后代的文本内容
     
     innerHTML和innerText是Element的属性,所以TextNode.innerHTML返回的是undefined,注意,并不是返回null 
2. 节点结构关系属性

   i. 兄弟关系
    
    Node.nextSibling
    
    Node.previousSibling
   
   ii. 儿子关系

    Node.childNodes(返回包含指定节点的子节点的集合,这个集合是一个伪数组,里面是Node节点,并且伪数组内的值是动态变化的)
    
    Node.firstChild

    Node.lastChild
   
   iii.父关系

    Node.parentNode
### Node方法
   Node.appendChild()

   Node.hasChildNodes()

   Node.cloneNode()

   Node.insertBefore()

   Node.removeChild()

   Node.replaceChild()

   Node.contains()

   Node.isEqualNode()

   Node.isSameNode()

   Node.normalize()
***
##  需特殊记忆的几个点（node接口）
1. nextSibling和prevSibling可能会获取到文本
2. innerText和textContent的细微差别

    i. textContent 会获取所有元素的内容，包括style和script元素，而innerText不会。

    ii. innerText不会返回隐藏元素的文本，而textContent会。

    iii. 受CSS样式的影响，innerText会触发重排（reflow），但textContent不会。
3. nodeType返回值1表示元素，3表示文本，9表示document类型。
4. cloneNode接受一个true（深拷贝）或者false（浅拷贝），一般情况都使用cloneNode（true）。
5. isEqualNode（）与isSameNode的区别：前者只是看上去相等，后者表示完全一样，可理解为===
***
## document节点的一些属性和方法
### document属性





            