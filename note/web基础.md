#web基础
##1. HTML
##2. JavaScript
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