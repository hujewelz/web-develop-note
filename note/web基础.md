# web基础
## 1. HTML
### HTML标签元素的分类
在了解CSS布局之前，我们需要提前知道一些知识，在CSS中，html中的标签元素大体被分为三种不同的类型：块状元素、内联元素(又叫行内元素)和内联块状元素。  
常用的块状元素有：

`<div>`、`<p>`、`<h1>...<h6>`、`<ol>`、`<ul>`、`<dl>`、`<table>`、`<address>`、`<blockquote>` 、`<form>`

常用的内联元素有：

`<a>`、`<span>`、`<br>`、`<i>`、`<em>`、`<strong>`、`<label>`、`<q>`、`<var>`、`<cite>`、`<code>`

常用的内联块状元素有：

`<img>`、`<input>`

#### 块级元素
什么是块级元素？在html中`<div>`、 `<p>`、`<h1>`、`<form>`、`<ul>` 和 `<li>`就是块级元素。设置display:block就是将元素显示为块级元素。如下代码就是将内联元素a转换为块状元素，从而使a元素具有块状元素特点。

	a {display: block;}

块级元素具有以下特点：

1. 每个块级元素都从新的一行开始，并且其后的元素也另起一行。（一个块级元素独占一行）

2. 元素的高度、宽度、行高以及顶和底边距都可设置。

3. 元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。

#### 内联元素
在html中，`<span>`、`<a>`、`<label>`、 `<strong>` 和`<em>`就是典型的内联元素（行内元素）（inline）元素。当然块状元素也可以通过代码display:inline将元素设置为内联元素。如下代码就是将块状元素div转换为内联元素，从而使 div 元素具有内联元素特点。

	div {display: inline;}
	
内联元素具有以下特点：

1. 和其他元素都在一行上；

2. 元素的高度、宽度及顶部和底部边距不可设置；

3. 元素的宽度就是它包含的文字或图片的宽度，不可改变。

#### 内联块状元素
**内联块状元素**（inline-block）就是同时具备内联元素、块状元素的特点，代码`display:inline-block`就是将元素设置为内联块状元素。(css2.1新增)，`<img>`、`<input>`标签就是这种内联块状标签。

inline-block 元素具有以下特点：

1、和其他元素都在一行上；

2、元素的高度、宽度、行高以及顶和底边距都可设置。

### css布局模型
清楚了CSS 盒模型的基本概念、 盒模型类型， 我们就可以深入探讨网页布局的基本模型了。布局模型与盒模型一样都是 CSS 最基本、 最核心的概念。 但布局模型是建立在盒模型基础之上，又不同于我们常说的 CSS 布局样式或 CSS 布局模板。如果说布局模型是本，那么 CSS 布局模板就是末了，是外在的表现形式。 
CSS包含3种基本的布局模型，用英文概括为：`Flow`、`Layer` 和 `Float`。

在网页中，元素有三种布局模型：

1. 流动模型（Flow）
2. 浮动模型 (Float)
3. 层模型（Layer）

#### 流动模型
流动（Flow）是默认的网页布局模式。也就是说网页在默认状态下的 HTML 网页元素都是根据流动模型来分布网页内容的。

流动布局模型具有2个比较典型的特征：

1. 块状元素都会在所处的包含元素内自上而下按顺序垂直延伸分布，因为在默认状态下，块状元素的宽度都为100%。实际上，块状元素都会以行的形式占据位置。
2. 在流动模型下，内联元素都会在所处的包含元素内从左到右水平分布显示。（内联元素可不像块状元素这么霸道独占一行）

#### 浮动模型
块状元素这么霸道都是独占一行，如果现在我们想让两个块状元素并排显示，怎么办呢？不要着急，设置元素浮动就可以实现这一愿望。

任何元素在默认情况下是不能浮动的，但可以用 CSS 定义为浮动，如 `div`、`p`、`table`、`img` 等元素都可以被定义为浮动。

#### 层模型
什么是层布局模型？层布局模型就像是图像软件PhotoShop中非常流行的图层编辑功能一样，每个图层能够精确定位操作，但在网页设计领域，由于网页大小的活动性，层布局没能受到热捧。但是在网页上局部使用层布局还是有其方便之处的。下面我们来学习一下html中的层布局。

如何让html元素在网页中精确定位，就像图像软件PhotoShop中的图层一样可以对每个图层能够精确定位操作。CSS定义了一组定位（positioning）属性来支持层布局模型。

层模型有三种形式：

1. 绝对定位(position: absolute)
2. 相对定位(position: relative)
3. 固定定位(position: fixed)

#### 层模型--绝对定位
如果想为元素设置层模型中的绝对定位，需要设置`position:absolute`(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用`left`、`right`、`top`、`bottom`属性相对于其**最接近的一个具有定位属性的父包含块**进行绝对定位。如果不存在这样的包含块，则相对于`body`元素，即相对于*浏览器窗口*。
#### 层模型--相对定位
如果想为元素设置层模型中的相对定位，需要设置`position:relative`（表示相对定位），它通过`left`、`right`、`top`、`bottom`属性确定元素在正常文档流中的偏移位置。相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。

```
.div1 {
		position: relative;
		top: 20px;
		left: 100px;
		width: 200px;
		height: 200px; 
		border: 1px solid red;
	}
```

```
	<div class="div1"></div><span>相对定位元素偏移前的位置会保留不动。</span>
```
![2.png](http://upload-images.jianshu.io/upload_images/1351863-9d0e67d31a10ff1a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

从效果图中可以明显的看出，虽然div元素相对于以前的位置产生了偏移，但是div元素以前的位置还是保留着，所以后面的span元素是显示在了div元素以前位置的后面。

### 层模型--固定定位
`fixed`：表示固定定位，与`absolute`定位类型类似，但它的相对移动的坐标是视图（屏幕内的网页窗口）本身。由于视图本身是固定的，它不会随浏览器窗口的滚动条滚动而变化，除非你在屏幕中移动浏览器窗口的屏幕位置，或改变浏览器窗口的显示大小，因此固定定位的元素会始终位于浏览器窗口内视图的某个位置，不会受文档流动影响，这与`background-attachment:fixed`;属性功能相同。
### Relative与Absolute组合使用
在学习绝对定位的方法：使用`position:absolute`
可以实现被设置元素相对于浏览器（body）设置定位以后，大家有没有想过可不可以相对于其它元素进行定位呢？答案是肯定的，当然可以。使用`position:relative`来帮忙，但是必须遵守下面规范：

1. 参照定位的元素必须是相对定位元素的前辈元素：

 ```
	<div class="box"><!--参照定位的元素-->
		<img src="3.jpg" style="width:200px; height: 200px; ">
		<div class="text">Relative与Absolute组合使用</div><!--相对定位元素-->
	</div>
```
从上面代码可以看出box是text的父元素（父元素当然也是前辈元素了）。

2. 参照定位的元素必须加入position:relative;
```css
.box {
		position: relative;
		width: 200px;
		height: 200px;
		border: 1px solid red;
	}
```

3. 定位元素加入position:absolute，便可以使用top、bottom、left、right来进行偏移定位了。
```css
.text {
		position: absolute;
		bottom: 0px;
		border: 1px solid #e8e8e8;
	}
```

![5.png](http://upload-images.jianshu.io/upload_images/1351863-5e2292c85b2d8b9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




## 2. JavaScript
### 浏览器渲染引擎的基本渲染流程
![image](https://github.com/hujewelz/web-develop-note/blob/master/note/resource/1.png)

### Dom节点类型

| 节点类型                  | 数值常量 | 字符常量 |
|---------------------------|:---:|------------|
|Element(元素节点)		     |1   |ELEMEMENT_NODE|
|Attr(属性节点)               |2   |	ATTRIBUTE_NODE|
|Text(文本节点)               |3   |TEXT_NODE|
|Comment(注释节点)            |8   |COMMENT_NODE|
|Document(文档节点)           |9   |DOCUMENT_NODE|
|DocumentType(文档类型节点)    |10  |DOCUMENT_TYPE_NODE|
|DocumentFragment(文档片段节点)|11  |DOCUMENT_FRAGMENT_NODE|

### 节点的nodeName与nodeValue
| 节点类型                  | nodeName | nodeValue |
|---------------------------|------------------|------------|
|Element(元素节点)		     |元素的标签名(DIV)   |null|
|Attr(属性节点)               |属性的名称(id)      |属性的值(main)|
|Text(文本节点)               |#text             |节点所包含的文本|
|Comment(注释节点)            |#comment          |注释的内容|
|DocumentType(文档类型节点)    |doctype的名称(html)|null|
|DocumentFragment(文档片段节点)|#document-fragment|null|

1. 元素节点的 `nodeName` 与标签名相同
2. 属性节点的 `nodeName` 是属性的名称
3. 文本节点的 `nodeName` 永远是 `#text`
4. 文档节点的 `nodeName` 永远是 `#document`
5. 元素节点的 `nodeValue` 是 `undefined` 或 `null`
6. 文本节点的 `nodeValue` 是文本自身
7. 属性节点的 `nodeValue` 是属性的值

###控制HTML元素
#####getElementById()
返回带有指定Id的节点对象。<br/>
语法：

	document.getElementById(Id)
	
#####getElementsByName() 
返回带有指定名称的节点对象的集合。<br/>
语法：

	document.getElementsByName(name)

#####getElementsByTagName()
返回带有指定标签名的节点对象的集合。返回元素的顺序是它们在文档中的顺序。<br/>
语法：

	getElementsByTagName(Tagname)
	
#####访问子节点:childNodes 
访问选定元素节点下的所有子节点的列表，返回的值可以看作是一个数组，他具有`length`属性。<br/>
语法：

	elementNode.childNodes
	
#####访问子结点的第一项:
	 node.firstChild
#####访问子结点的最后项: 
	node.lastChild
#####访问父节点parentNode: 
	elementNode.parentNode

#####访问兄弟节点:
`nextSibling` 属性可返回某个节点之后紧跟的节点（处于同一树层级中）。<br/>
语法：

	nodeObject.nextSibling
`previousSibling` 属性可返回某个节点之前紧跟的节点（处于同一树层级中）。<br/>
语法：

	nodeObject.previousSibling 
说明：如果无此节点，则该属性返回 `null`。

注意: 两个属性获取的是节点。`Internet Explorer` 会忽略节点间生成的空白文本节点（例如，换行符号），而其它浏览器不会忽略
#####插入节点appendChild()
在指定节点的最后一个子节点列表之后添加一个新的子节点。<br/>
语法：

	appendChild(newnode)
#####插入节点insertBefore()
`insertBefore()` 方法可在已有的子节点前插入一个新的子节点。<br/>
语法：

	insertBefore(newnode,node); newnode: 要插入的新节点 node: 指定此节点前插入节点
#####删除节点removeChild()
`removeChild()` 方法从子节点列表中删除某个节点。如删除成功，此方法可返回被删除的节点，如失败，则返回 `NULL`。<br/>
语法：

	nodeObject.removeChild(node)
#####替换元素节点replaceChild()
`replaceChild` 实现子节点(对象)的替换。返回被替换对象的引用。<br/>
语法：

	node.replaceChild (newnode,oldnode)

#####创建元素节点createElement
`createElement()`方法可创建元素节点。此方法可返回一个 Element 对象。<br/>
语法：

	document.createElement(tagName)

#####创建文本节点createTextNode
`createTextNode()` 方法创建新的文本节点，返回新创建的 Text 节点。<br/>
语法：

	document.createTextNode(data) data : 字符串值，可规定此节点的文本


###事件
`JavaScript` 创建动态页面。事件是可以被 `JavaScript` 侦测到的行为。 网页中的每个元素都可以产生某些可以触发 `avaScript` 函数或程序的事件。

比如说，当用户单击按钮或者提交表单数据时，就发生一个鼠标单击（`onclick`）事件，需要浏览器做出处理，返回给用户一个结果。

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

