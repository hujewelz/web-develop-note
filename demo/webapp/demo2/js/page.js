/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-11 17:55:39
 * @version $Id$
 */

$(document).ready(function() {

	var count = 6;
	var win = $(window);

	var render = function() {
		
		var winWidth = win.width();
		var padding = 5;
		var itemWidth = Math.floor((winWidth-4*padding-6*1)/3);
		var itemHeight = itemWidth*110 / 103;
		var htmlStr = '';$('#container').html();
		
		for (var i = 0; i < count; i++) {
			var margin_top = 0;

			if (parseInt(i/3) == 0) { 
				margin_top=5;
			}
			htmlStr += '<li style="margin-top:'+margin_top+'px"><img src="goods.jpg", width="'+itemWidth+'"px height="'+itemHeight+'px"><h3>台湾进口物资</h3><p>尝鲜价：<span>￥9.9</span></p></li>';
		};

		$('#container').append(htmlStr);
		
	}


	$(window).scroll(function () {
		
		var scrollTop = $(window).scrollTop();//document.body.scrollTop;
		var clientH = $(window).height();//document.documentElement.clientHeight;
		var scrollH = document.body.scrollHeight; //$('body').height();//
		s = setTimeout(function() {
			if (scrollTop+clientH >= scrollH) {
				loadList();
				
			};

		}, 500);
		
	});

	function loadList() {
		$.get('http://192.168.0.106/SSM_1/shop/findGoodShopCartByUserId?userId=11', function(result) {
			alert(result);
			render();
		});

	}

});



		
