
$(function(){

	//图片轮播

	var index=0;
	var len=$('.img li').length;
	var time;
	run();
	function run(){

		time=setInterval(function(){
			//当前图片隐藏
			$('.img li').eq(index).fadeOut();
			//当前索引去除样式
			$('.index li').eq(index).removeClass('active');
			index++;
			if(index>=len){
				index=0
			}
			$('.img li').eq(index).fadeIn();
			$('.index li').eq(index).addClass('active');

		},1000)
	}
	//鼠标移入lunbo显示按钮
	$('.lunbo').mouseover(function(){
		$('div').addClass('show');
		clearInterval(time);
	}).mouseout(function(){
		$('div').removeClass('show');
		run();
	})
	//鼠标点击左右按钮
	$('.lunbo .left').click(function(){
		$('.img li').eq(index).fadeOut();
		//当前索引去除样式
		$('.index li').eq(index).removeClass('active');
		index--;
		if(index<0){
			index=len-1
		}
		$('.img li').eq(index).fadeIn();
		$('.index li').eq(index).addClass('active');

	})
	$('.lunbo .right').click(function(){
		$('.img li').eq(index).fadeOut();
		//当前索引去除样式
		$('.index li').eq(index).removeClass('active');
		index++;
		if(index>=len){
			index=0
		}
		$('.img li').eq(index).fadeIn();
		$('.index li').eq(index).addClass('active');

	})
	//鼠标移入按钮改变背景颜色
	$('.lunbo .left').mouseover(function(){
		$('.left').addClass('yanse');
	}).mouseout(function(){
		$('.left').removeClass('yanse');
	})
	$('.lunbo .right').mouseover(function(){
		$('.right').addClass('yanse');
	}).mouseout(function(){
		$('.right').removeClass('yanse');
	})

	//鼠标移入每个索引显示对应的图片和索引样式
	$('.lunbo .index li').mouseover(function(){
		//当前的图片淡出
		$('.img li').eq(index).fadeOut();
		$('.index li').eq(index).removeClass('active');
		index=$(this).index();
		$('.img li').eq(index).fadeIn();
		$('.index li').eq(index).addClass('active');
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
		$(this).find('.house').stop(true,true);
	})

	$('.fix .nav-fix').mouseenter(function(){
		$('.fix .nav-fix>li').eq(index).find('.house').hide().fadeIn();
	}).mouseleave(function(){
		$('.fix .nav-fix>li').eq(index).find('.house').show().fadeOut();

	})
	 //当页面滚动到200的时候,导航下拉下来

	 $(window).scroll(function(){
	 	if($(this).scrollTop()>=200){
	 		$('.big-fix').slideDown(150);
	 	} else {
	 		$('.big-fix').slideUp(10);
	 	}
	 })


	  //当页面滚动到300的时候,显示出来回顶部
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
	// 当input聚焦的时候,显示下拉框
	$('.search input').focus(function(){
		$('.search .search-content').show();
	})
	$('.search .input').mouseleave(function(){
		$('.search .search-content').hide();

	})


	var data = [
        { "id": 1, "title": "冬眠暖绒四件套", "price": 499, "img": "image/list/bad/1.jpg", 'xuan': "5色可选" ,'add':"加购价",'jieshao':"纯棉拉舍尔"},
        { "id": 1, "title": "全棉色织磨毛四件套", "price": 299, "img": "image/list/bad/2.jpg", 'xuan': "4色可选" ,'add':"加购价",'jieshao':"几何撞色，厚实升温"},
        { "id": 1, "title": "丛林物语磨毛四件套", "price": 99, "img": "image/list/bad/3.jpg", 'xuan': "" ,'add':"爆品",'jieshao':"设计师合作，浪漫色彩"},
        { "id": 1, "title": "350根全棉贡缎暖绒素色四件套", "price": 499, "img": "image/list/bad/4.jpg", 'xuan': "" ,'add':"加购价",'jieshao':"夏季凉被，冬季暖套，四季可用"},
        { "id": 1, "title": "清新趣粉全棉四件套 条纹绿格", "price": 459, "img": "image/list/bad/5.jpg", 'xuan': "5色可选" ,'add':"加购价",'jieshao':"精梳长绒棉,设计师系列"},
        { "id": 1, "title": "简约知性全棉四件套 素雅灰", "price": 19, "img": "image/list/bad/6.jpg", 'xuan': "5色可选" ,'add':"加购价",'jieshao':"纯棉水洗感，柔软吸汗"},
        { "id": 1, "title": "全棉小清新印花四件套", "price": 9, "img": "image/list/bad/7.jpg", 'xuan': "" ,'add':"促销",'jieshao':"素净优雅灰，简约格纹"},
        { "id": 1, "title": "撞色全亚麻四件套", "price": 49, "img": "image/list/bad/8.jpg", 'xuan': "" ,'add':"加购价",'jieshao':"几何线条，北欧简约风"},
        { "id": 1, "title": "全棉几何线条印花四件套", "price": 29, "img": "image/list/bad/9.jpg", 'xuan': "5色可选" ,'add':"爆品",'jieshao':"浪漫意趣，柔软贴肤"},
        { "id": 1, "title": "简约知性全棉四件套 胭脂粉", "price": 490, "img": "image/list/bad/10.jpg", 'xuan': "" ,'add':"加购价",'jieshao':"天然竹醌成分，抑菌爽滑健康睡眠"},
        
    ];
	

	function search(data) {
		var str='';
		data.forEach(function(value,key){

			str+='<li class="item">';
			str+='<div class="img">';
			str+='<img src="'+value.img+'" alt="">';
			str+='<span>'+value.xuan+'</span>';
			str+='</div>';
			str+='<div class="content">';			
			str+='<div class="tp">';	
			str+='<span class="add">'+value.add+'</span>';		
			str+='</div>';
			str+='<h4><a href="">'+value.title+'</a></h4>';
			str+='<p class="price">'+value.price+'</p>';
			str+='<hr>';
			str+='<p class="bot">'+value.jieshao+'</p>';
			str+='</div>';	
			str+='</li>';	
									
				
		})
		document.querySelector('.bad .list').innerHTML=str;
	}
	search(data);

	//当点击价格的时候，根据价格排序

	$('.name .jiage').click(function(){

		$('.name .moren').removeClass('moren');
		$(this).children('span').css('color','#b4a078')
		var sort=$(this).attr('data-sort');

		if(sort=='true'){
			data.sort(function(a,b){
				return a.price-b.price;
			})
			$(this).attr('data-sort','false')
		} else {
			data.sort(function(a,b){
				return b.price-a.price;
		})
		$(this).attr('data-sort','true')
	}
			search(data);
})


});