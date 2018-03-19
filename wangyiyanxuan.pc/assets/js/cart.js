$(function(){

		//猜你喜欢
		var lbSwiper = new Swiper('.lbSwiper', {
			// autoplay: 2000,
		    // 分页器
		    pagination: '.swiper-pagination',
		    
		    // 前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',

		    // 每页有几个slides
			slidesPerView: 4,
			// 每两个slide之间的间隙是30px
			// spaceBetween: 0,s
			// 4个为一组
			slidesPerGroup: 4,
			// 循环滚动
			// loop: true,
			loopFillGroupWithBlank: true,
			
	  	})   

	  	// 头部导航
	 var index=1;
	 $('.top-row .nav>li').mouseenter(function(){
	 	index=$(this).index();
	 	$(this).find('.house').show();

	 }).mouseleave(function(){
	 	$(this).find('.house').hide();
	 	$(this).find('.house').stop(true,true);


	 })
	 $('.top-row .nav').mouseenter(function(){
	 	$('.top-row .nav>li').eq(index).find('.house').hide().fadeIn();
	 }).mouseleave(function(){
	 	$('.top-row .nav>li').eq(index).find('.house').show().fadeOut();
	 })


	$('.fix .nav-fix>li').mouseenter(function(){

		index=$(this).index();
		$(this).find('.house').show();

	}).mouseleave(function(){
		$(this).find('.house').hide();
	})

	$('.fix .nav-fix').mouseenter(function(){
		$('.fix .nav-fix>li').eq(index).find('.house').hide().fadeIn();
	}).mouseleave(function(){
		$('.fix .nav-fix>li').eq(index).find('.house').show().fadeOut();

	})
	 //当页面滚动到200的时候，导航下拉下来

	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=200){
	 		$('.big-fix').slideDown(150);
	 	} else {
	 		$('.big-fix').slideUp(10);
	 	}
	 })


	  //当页面滚动到300的时候，显示出来回顶部
	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=600){
	 		$('.hid,.bt').show();
	 	} else {
	 		$('.hid,.bt').hide();

	 	}
	 })

	  //当点击回顶部（bt）时候让页面滚动距离等于0
	 $('.fixed .bt').click(function(){
	 	$('html,body').animate({scrollTop:'0'},600)
	 })

	 // 购物车
	 /*
	1.++ -- 删除
	2.计算总价格和总数量
	3.全选和全不选
	 */
	 var data =[
	 	{ "id": 1, "img": "1.png", "title": "全棉条纹四件套 新款", "desc": "木兰黄（床单款） 1.5M（床尺寸）", "price": 299.00, "num": 1 },
	 	{ "id": 2, "img": "3.png", "title": "全棉四件套", "desc": "宝石蓝 1.5M（床尺寸）", "price": 199.00, "num": 2 }
	 ];
	 var str='';
	 data.forEach(function(value,key){
		str+='<div class="tu">';
		str+='<div class="input">';
		str+='	<input class="xuanze" type="checkbox">';
		str+='</div>';
		str+='<div class="img">';
		str+='	<a href="">';
		str+='		<img src="image/cart/'+value.img+'" height="98" width="98" alt="">';
		str+='	</a>';
		str+='	<div class="js">';
		str+='	<a class="t"href="">'+value.title+'</a><br>';
		str+='	<a class="chi" href="">'+value.desc+'</a>';
		str+='</div>';
		str+='</div>';
		str+='<div class="pri1">';
		str+='	<p>￥<span class="price">'+value.price.toFixed(2)+'</span></p>';
		str+='</div>';
		str+='<div class="jia">';
		str+='	<span class="jian">-</span>';
		str+='	<input type="text" value="'+value.num+'">';
		str+='	<span class="j">+</span>';
		str+='</div>';
		str+='<div class="pri2">';
		str+='	<p>￥<span>'+(value.price * value.num).toFixed(2)+'</span></p>';
		str+='</div>';
		str+='<div class="rt">';
		str+='	<a href="">移入收藏夹</a><br>';
		str+='	<a class="remove" href="javascript:;">删除</a>';
		str+='</div>';
		str+='</div>';
	 })
	 $('.Add').html(str);

	//数量增加
	$('.j').click(function(){
		//获取点击的上面的input的value属性值
		var num=$(this).prev().attr('value');
		num++;
		//增加之后再写入到上面的input的value属性里
		$(this).prev().attr('value',num);

		// 获取当前商品的价格
		var price=$(this).parent().prev().find('span').text();
		// 重新计算小计价格
		$(this).parent().next().find('span').text((num*price).toFixed(2));
		
		calu();
	})

	
	//数量减少
	$('.jian').click(function(){
		//获取点击的上面的input的value属性值
		var num=$(this).next().attr('value');
		num--;
		if(num<1){
			
			return;	
		}
		//增加之后再写入到上面的input的value属性里
		$(this).next().attr('value',num);
		// $('.jia').addClass('shou');


		// 获取当前商品的价格
		var price=$(this).parent().prev().find('span').text();
		
		// 重新计算小计价格
		$(this).parent().next().find('span').text((num*price).toFixed(2));

		calu();
	})

	// 删除当前商品
	$('.remove').click(function(){
		$(this).parents('.tu').remove();

		calu();
	})

	
	function calu(){

		var price=0;
		var sum=0;
		//计算总价格和总数量（所有的商品中，每件商品的单价*数量再求和  数量总和）
		$('.tu').each(function(){
			//判断当前的商品是否选中
			// .tu下的.che是否选中
			
			$('.xuanze').click(function(){

				console.log($(this).prop('checked'));
			})

			if($(this).find('.xuanze').prop('checked')){
				// 根据最大父级.tu获取每个商品对应的价格和数量
				var p = Number($(this).find('.price').text());
				var n = Number($(this).find('.jia').find('input').attr('value'));
				price += p * n;
				sum += n;
				console.log(n*p);
				
			}
		});
		//总数量
		$('.ft .lf em').text(sum);

		//总价格
		$('.p').text('￥'+price.toFixed(2));
	}
	calu();
	
	// 点击全选和全不选
	$('.all-top').click(function(){
		console.log(111);
		// 获取按钮是否选中
		var isCheck=$(this).prop('checked');

		// 设置购物车中的每件商品的checkbox多选按钮是否选中
		$('.tu .xuanze').prop('checked',isCheck);

		//重新计算
		calu();
	})

	// 点击选择的时候重新计算价格
	$('.xuanze').click(function(){
		calu();
	})


	// 鼠标移入加减的时候，显示抓手和不能点击的鼠标样式
	$('.jian').mouseover(function(){
		var num=$(this).next().attr('value');
		if(num==1){

			$('.jia').addClass('style');
		}else {
			$('.jia').removeClass('style');
			$('.jia').addClass('shou');
		}

	})
})



	