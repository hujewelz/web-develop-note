#absolute
### absolute的破坏性
使用绝对定位会使元素脱离文档流，造成父级元素的坍塌。

```html
<div class="content">
    <img src="1.jpg" >
</div>
```

```css
.content {
	background-color: red;
	padding: 10px;
}
.content img {
	position: absolute;
	width: 200px;
	height: 200px;
}
```

### absolute的包裹性
对容器使用绝对定位会使元素包裹住子元素。
还是以上面的代码为例：
```css
.content {
	position: absolute;
	background-color: red;
	padding: 10px;
}
.content img {
	width: 200px;
	height: 200px;
}
```


### 绝对定位元素拉伸
无固定width/height容器内的绝对定位元素拉伸,实现全覆盖的效果

	.cover {position: absolute; left: 0; top: 0; right: 0; bottom: 0;}
	
### 当left/right拉伸和width同时存在时：
```css
.image {
    position: absolute; left: 0; right: 0; width: 50%; 
}
```

此时图片图片距离左边0px,拥有页面一半的宽度,由此可见当left/right width/height同时存在时，width/height 比left/height要优先。
当尝试给.image添加`margin: auto`时，你会发现图片水平居中了。

### absolute与整体布局
#### 1.body降级，子元素升级
升级的子div(假设为main)满屏走起：

	.page{ position:absolute; left:0; top:0; right:0; bottom:0 }

绝对定位受限于父级，因此main要想实现满屏拉伸，需要：
`html,body { height: 100%; }
#### 2.各模块--头尾、侧边栏(pc端)各居其位

```css
.header,.footer {position:absolute; left:0; right:0;}
.header {height:48px; top:0;}
.footer {height:52px; bottom:0;}
```

如果有侧边栏

```css
.aside {
	width:250px;
	position:absolute;
	left:0; top:0;bottom:0;
}
```

### 3.将内容区域当成body来使用
```css
.content {
	position:absolute;
	top:48px;
	bottom:52px;
	left:250px; (如果有侧边栏)
	overflow:auto;
}
```