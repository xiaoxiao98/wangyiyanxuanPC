
$(function(){


		//大家都在看
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
	 	$(this).find('.house').stop(true,true).hide();


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


	 //鼠标移入小图的每个索引值的时候，显示对应索引的每个大图
	 var index=0;
	 $('.smallImg li').mouseenter(function(){
	 	console.log($(this).index());

	 	$('.bigImg img').eq(index).hide();
	 	index=$(this).index();
	 	$('.bigImg img').eq(index).show();
	 	console.log($('.bigImg img').index());
	 }).mouseleave(function(){
	 	// $('.bigImg img').eq(index).hide();
	 })

	 // 点击li时候显示边框	 
	 $('.size ul li').click(function(){


	 	var xianshi=$(this).attr('data')

	 	//如果当前没有选框的话
	 	if(xianshi=='false'){
	 		console.log(111);
	 		$(this).children('div.img').show();
	 		$(this).siblings().children('div.bd').css('border','1px solid #ddd')
	 		$(this).siblings().children('div.img').hide();
	 		$(this).children('div.bd').css('border','2px solid #b4a078')
	 		
	 		// $('.detail').addClass('biankuang');

	 		// 加上后变为有选框
	 		$(this).attr('data','true')
	 		// $(this).css('border','1px solid #ddd')
	 	}
	 	else {
	 		
	 		$(this).children('div.img').hide();
	 		$(this).children('div.bd').css('border','1px solid #ddd')
	 		
	 		$(this).attr('data','false')
	 	}
	 	

	 })



	 $('.pj-content').hide();

	 //鼠标点击评价的时候，隐藏详情,延迟1s显示评价
	 $('.detail .nav .tw').click(function(){
	 	$('.big-content').hide();

	 	$('.pj-content').delay(500).show(0);

	 	$('.detail .item').removeClass('show');
	 	$(this).addClass('show');
	 })
	  $('.detail .nav .item-a').click(function(){
	 	$('.pj-content').hide();
	 	$('.big-content').show();
	 	$('.detail .nav .tw').removeClass('show');
	 	$(this).addClass('show');
	 })
	
	//搜索框
	// 当input聚焦的时候，显示下拉框
	$('.search input').focus(function(){
		$('.search .search-content').show();
	})
	$('.search .input').mouseleave(function(){
		$('.search .search-content').hide();

	})

	//倒计时
	run();
		function run(){

			var d1=new Date();
			var d2=new Date('2018-3-11 20:0:0');
			var time=d2.getTime()-d1.getTime();

			var hour=Math.floor(time/1000/60/60%24);
			var minute=Math.floor(time/1000/60%60);
			var second=Math.floor(time/1000%60);
			var s=time%1000/1000;

			document.querySelector('.djs').innerHTML=hour+'时'+minute+'分'+second+'秒'
		}
	setInterval(run,1000)
})


