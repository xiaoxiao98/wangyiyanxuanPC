
$(function(){

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


	 //当input中输入至少一个字符的时候，显示.x
	 var zhang=document.querySelector('.zh');
	 var mima=document.querySelector('.mima');
	 var xianshi=document.querySelectorAll('.yonghu .x');


	 var a=false;
	 var b=false;

	 zhang.oninput=function(){

	 	var len=this.value.length;

	 	if(len >= 1) {
	 		xianshi[0].className='sw';
	 		a=true;
	 	}

	 	xianshi[0].onclick=function(){
	 		zhang.value='';
	 		xianshi[0].className='x';
	 		a=false;
	 	}
	 }

	  mima.oninput=function(){

	 	var len=this.value.length;

	 	if(len >= 1) {
	 		xianshi[1].className='sw';
	 		b=true;
	 	} 

	 	xianshi[1].onclick=function(){
	 		mima.value='';
	 		xianshi[1].className='x';
	 		b=false;
	 	}
	 }

	 // 当失去焦点的时候，获取ul中的第一个li的内容，并写入到input中
	 $('.zh').blur(function(){
	 	var value=$(this).val().trim();
	 	if(value.length==0) {
			return;
		}
	 	//当失焦的时候，检测用户输入的如果是中文的话，让提示信息显示出来
	 	var reg=/[\u4E00-\u9FA5\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]/;
	 	
	 	if(reg.test(value)){
	 		$('.form').addClass('bian');
	 		$('.tishi').show();
	 		return;
	 	}else {
	 		$('.tishi').hide();
	 		$('.form').removeClass('bian');
	 	}


		// 获取加入.com的值
		var text=$('.select li:eq(0)').text();
		$(this).val(text);
		// 当失焦的时候让下拉框隐藏,延迟200ms，因为失焦在点击的前面
		$('.select').delay(200).hide(0);

	 }).keyup(function(){

	 	var value=$(this).val().trim();
	 	if(value.length==0) {
			return;
		}

	 	// 按键抬起的时候，如果用户输入的是中文，则不显示下拉框，显示提示信息
	 	var reg1=/[\u4e00-\u9fa5]/;
	 	if(reg1.test(value)){
	 		// $('.select').hide();
	 		return;
	 	}

	 	if(value.length==0) {
			return;
		}else{
			// 当按键抬起的时候，展示下拉框，将输入的内容写入到每个li的em中
			$('.select').show();
			var content=$(this).val();
			$('.select li').find('em').text(content);
	 	}
	 })

	 // 点击li，让点击的li内容写入到input.user中
		$('.select li').click(function(){
			$('.zh').val($(this).text());
		})
		

})


