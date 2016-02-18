#web基础
##1. HTML
##2. JavaScript
###浏览器渲染引擎的基本渲染流程
![image](https://github.com/hujewelz/web-develop-note/blob/master/note/resource/1.png)

###Dom节点类型

| 节点类型                  | 数值常量 | 字符常量 |
|---------------------------|:---:|------------|
|Element(元素节点)		     |1   |ELEMEMENT_NODE|
|Attr(属性节点)               |2   |	ATTRIBUTE_NODE|
|Text(文本节点)               |3   |TEXT_NODE|
|Comment(注释节点)            |8   |COMMENT_NODE|
|Document(文档节点)           |9   |DOCUMENT_NODE|
|DocumentType(文档类型节点)    |10  |DOCUMENT_TYPE_NODE|
|DocumentFragment(文档片段节点)|11  |DOCUMENT_FRAGMENT_NODE|

###节点的nodeName与nodeValue
| 节点类型                  | nodeName | nodeValue |
|---------------------------|------------------|------------|
|Element(元素节点)		     |元素的标签名(DIV)   |null|
|Attr(属性节点)               |属性的名称(id)      |属性的值(main)|
|Text(文本节点)               |#text             |节点所包含的文本|
|Comment(注释节点)            |#comment          |注释的内容|
|DocumentType(文档类型节点)    |doctype的名称(html)|null|
|DocumentFragment(文档片段节点)|#document-fragment|null|

* 1.元素节点的 nodeName 与标签名相同
* 2.属性节点的 nodeName 是属性的名称
* 3.文本节点的 nodeName 永远是 #text
* 4.文档节点的 nodeName 永远是 #document
* 5.元素节点的 nodeValue 是 undefined 或 null
* 6.文本节点的 nodeValue 是文本自身
* 7.属性节点的 nodeValue 是属性的值

###控制HTML元素
####getElementById()
返回带有指定Id的节点对象。<br/>
语法：

	document.getElementById(Id)
	
####getElementsByName() 
返回带有指定名称的节点对象的集合。<br/>
语法：

	document.getElementsByName(name)

####getElementsByTagName()
返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。<br/>
语法：

	getElementsByTagName(Tagname)
	
####访问子节点:childNodes 
访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有length属性。<br/>
语法：

	elementNode.childNodes
	
####访问子结点的第一项:
	 node.firstChild
####访问子结点的最后项: 
	node.lastChild
####访问父节点parentNode: 
	elementNode.parentNode

####访问兄弟节点:
nextSibling 属性可返回某个节点之后紧跟的节点（处于同一树层级中）。<br/>
语法：

	nodeObject.nextSibling
previousSibling 属性可返回某个节点之前紧跟的节点（处于同一树层级中）。<br/>
语法：

	nodeObject.previousSibling 
说明：如果无此节点，则该属性返回 null。

注意: 两个属性获取的是节点。Internet Explorer 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略
####插入节点appendChild()
在指定节点的最后一个子节点列表之后添加一个新的子节点。<br/>
语法：

	appendChild(newnode)
####插入节点insertBefore()
insertBefore() 方法可在已有的子节点前插入一个新的子节点。<br/>
语法：

	insertBefore(newnode,node); newnode: 要插入的新节点 node: 指定此节点前插入节点
####删除节点removeChild()
removeChild() 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 NULL。<br/>
语法：

	nodeObject.removeChild(node)
####替换元素节点replaceChild()
replaceChild 实现子节点(对象)的替换。返回被替换对象的引用。<br/>
语法：

	node.replaceChild (newnode,oldnode)

####创建元素节点createElement
createElement()方法可创建元素节点。此方法可返回一个 Element 对象。<br/>
语法：

	document.createElement(tagName)

####创建文本节点createTextNode
createTextNode() 方法创建新的文本节点，返回新创建的 Text 节点。<br/>
语法：

	document.createTextNode(data) data : 字符串值，可规定此节点的文本


###事件
JavaScript 创建动态页面。事件是可以被 JavaScript 侦测到的行为。 网页中的每个元素都可以产生某些可以触发 JavaScript 函数或程序的事件。

比如说，当用户单击按钮或者提交表单数据时，就发生一个鼠标单击（onclick）事件，需要浏览器做出处理，返回给用户一个结果。

| 事件          | 说明 |
|:------------:|:---:|
|onclick		|鼠标单击事件|
|onmouseover    |鼠标经过事件|	
|onmouseout     |鼠标移开事件|
|onchange       |文本框内容改变事件|
|onselect       |文本框内容被选中事件|
|onfocus    	|光标聚集  |
|onblur			|光标离开 |  	
|onload    		|网页导入 |
|onunload		|关闭网页  |

