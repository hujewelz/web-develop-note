/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-18 13:47:20
 * @version $Id$
 */

window.onload = function (argument) {
	// body...
	var box = document.getElementById('container');
	var imgs = document.getElementsByTagName('img');

	//单张图片的宽度
	var imgW = imgs[0].width;
	var expandW = 160;

	//设置容器总宽度
	var boxW = imgW + (imgs.length-1) * expandW;
	box.style.width = boxW + 'px';
	//设置每张图片初始位置
	function restuimgPos() {
		for (var i = 1; i < imgs.length; i++) {
			imgs[i].style.left = (i-1)*expandW + imgW + 'px';
		}
	 }

	 restuimgPos();

	//图片打开时移动的距离
	var translate = imgW - expandW;

	for (var i = 0; i < imgs.length; i++) {
		(function(i) {
   			imgs[i].onmouseover = function() {
   				//先将图片复位
   				restuimgPos();
   				for (var j = 1; j <= i; j++) {
   					imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate + 'px';
   				};
   			};

		})(i);
	};

};

