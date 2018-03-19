

$(function(){

	
	 // 图片的懒加载
        function lazyLoading() {
            console.log($('img').length);
            // 图片距离页面顶部距离 < 浏览器滚动距离 + 浏览器高度
            $('img').each(function(value, key) {
                if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
                    // 新图片地址
                    var newSrc = $(this).attr('data-src');

                    // 将图片的data-src赋值给src
                    $(this).attr('src', newSrc);

                    // 如果图片成功加载，干掉图片class="img"
                    // $(this).removeClass("img");
                    // 当图片加载成之后，先隐藏，然后在淡入进来
                    // $(this).hide().fadeIn(800);
                }
            })
        }
        // 初始化懒加载
        lazyLoading();
        $(window).scroll(function() {
            lazyLoading();
        })


	//进入页面，图片自动轮播
	var index =0;
	var len=$('.lunbo .img li').length;
	var time;
	run();
	function run(){
		time=setInterval(function(){
			//当前图片隐藏
			$('.lunbo .img li').eq(index).fadeOut();
			//当前索引去除样式
			$('.lunbo .index li').eq(index).removeClass('active')

			index++;
			if(index>=len){
				index=0;
			}

			$('.lunbo .img li').eq(index).fadeIn();
			$('.lunbo .index li').eq(index).addClass('active')

		},2000)
	}
	//鼠标移入lunbo，轮播停止,移出，轮播继续
	$('.lunbo').mouseover(function(){
		clearInterval(time);
	}).mouseout(function(){
		run();
	})
	//鼠标移入按钮，背景颜色改变
	$('.lunbo .left , .lunbo .right').mouseover(function(){
		$(this).css('background','#b4a078').mouseout(function(){
			$(this).css('background','#D0C4AF');
		})
	})
	//鼠标点击左按钮，显示上一张
	$('.lunbo .left').click(function(){
		$('.lunbo .img li').eq(index).fadeOut();
		$('.lunbo .index li').eq(index).removeClass('active');
		index--;
		if(index<0){
			index=len-1;
		}
		$('.lunbo .img li').eq(index).fadeIn();
		$('.lunbo .index li').eq(index).addClass('active');
	})
	//鼠标点击右按钮，显示下一张图片
	$('.lunbo .right').click(function(){
		$('.lunbo .img li').eq(index).fadeOut();
		$('.lunbo .index li').eq(index).removeClass('active');
		index++;
		if(index>=len){
			index=0;
		}
		$('.lunbo .img li').eq(index).fadeIn();
		$('.lunbo .index li').eq(index).addClass('active');
	})
	//鼠标移入索引，显示对应的图片
	$('.lunbo .index li').mouseover(function(){
		$('.lunbo .img li').eq(index).fadeOut();
		$('.lunbo .index li').eq(index).removeClass('active');

		index=$(this).index();
		$('.lunbo .img li').eq(index).fadeIn();
		$('.lunbo .index li').eq(index).addClass('active');

	})


	// 头部导航
	 var index1=1;
	 $('.top-row .nav>li').mouseenter(function(){
	 	index1=$(this).index();
	 	$(this).find('.house').show();

	 }).mouseleave(function(){
	 	$(this).find('.house').hide();
	 	$(this).find('.house').stop(true,true);

	 })
	 $('.top-row .nav').mouseenter(function(){
	 	$('.top-row .nav>li').eq(index1).find('.house').hide().fadeIn();
	 }).mouseleave(function(){
	 	$('.top-row .nav>li').eq(index1).find('.house').show().fadeOut();
	 })


	$('.fix .nav-fix>li').mouseenter(function(){

		index1=$(this).index();
		$(this).find('.house').show();

	}).mouseleave(function(){
		$(this).find('.house').hide();
	})

	$('.fix .nav-fix').mouseenter(function(){
		$('.fix .nav-fix>li').eq(index1).find('.house').hide().fadeIn();
	}).mouseleave(function(){
		$('.fix .nav-fix>li').eq(index1).find('.house').show().fadeOut();

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

	 //搜索框
	// 当input聚焦的时候，显示下拉框
	$('.search input').focus(function(){
		$('.search .search-content').show();
	})
	$('.search .input').mouseleave(function(){
		$('.search .search-content').hide();

	})





		//新品首发
		var mySwiper = new Swiper('.s-c', {
			// autoplay: 2000,
		    // 分页器
		    pagination: '.swiper-pagination',
		    
		    // 前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',

		    // 每页有几个slides
			slidesPerView: 4,
			// 每两个slide之间的间隙是30px
			spaceBetween: 0,
			// 4个为一组
			slidesPerGroup: 4,
			// 循环滚动
			// loop: true,
			loopFillGroupWithBlank: true,
			
	  	})   

		//大家都在说
	  	
	  	var mSwiper = new Swiper('.swi-big', {
			//autoplay: 2000,
		    // 分页器
		    pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',

		    // 每页有几个slides
			slidesPerView: 3,
			
			// 3个为一组
			// slidesPerGroup: 3,
			// 循环滚动
			loop: true,
			loopFillGroupWithBlank: true,
			
	  	})   

})
	  	//限时购  距离18点
	  	run();

		setInterval(run,1000);
		  function run(){

		  	var d=new Date();
		  	var d1=new Date('2018-3-11 18:0:0');
		  	var time=d1.getTime()-d.getTime();

		  	// 剩余的小时
			var hour = add(Math.floor(time/1000/60/60%24));
			// 剩余的分钟
			var minute = add(Math.floor(time/1000/60%60));
			// 剩余的秒数
			var second = add(Math.floor(time/1000%60));

			document.querySelectorAll('.down .num')[0].innerHTML=hour;
			document.querySelectorAll('.down .num')[1].innerHTML=minute;
			document.querySelectorAll('.down .num')[2].innerHTML=second;
		  }	

	  	function add(time){
	  		if(time<10){
				time='0'+time;
			}
			return time;
	  	}
		
	  	//鼠标点击hot，让ye隐藏，no显示
	  	var hot=document.querySelector('.hot');
	  	var ye=document.querySelector('.ye');
	  	var no=document.querySelector('.no');
	  	var sho=document.querySelector('.sho');

	  	hot.onclick=function(){
	  		ye.style.display='none';
	  		no.style.display='block';
	  		sho.className='';
	  		hot.className='show';
	  	}
	  	sho.onclick=function(){
	  		ye.style.display='block';
	  		no.style.display='none';
	  		sho.className='show';
	  		hot.className='';
	  	}




	



