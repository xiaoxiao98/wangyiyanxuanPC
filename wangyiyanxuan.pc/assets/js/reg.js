$(function(){

	//input聚焦的时候，显示蓝色边框
	// 用户名
	$('.user').focus(function(){

		$('.username').addClass('focu');
		$('.content .username').removeClass('shake');
	}).blur(function(){
		$('.username').removeClass('focu');
		
	})
	// 密码
	$('.password .pass').focus(function(){
		$('.content').removeClass('error3');
		$('.password').addClass('focu1');
		$('.content .password').removeClass('shake');

	}).blur(function(){
		$('.password').removeClass('focu1');

	})

	//确认密码
	$('.okpass .okpassword').focus(function(){
		$('.content').removeClass('redbd shake');
		$('.content').addClass('focu2');
	}).blur(function(){

		$('.content').removeClass('cuo redbd focu2');
		
	})

	//手机号
	$('.num .n').focus(function(){
		$('.content').removeClass('numred');
		$('.content').addClass('focu3');
	}).blur(function(){

		$('.content').removeClass('numcuo numred focu3');
		// $('.content').addClass('shake');
		
	})
	 //验证码
	$('.massg .yz').focus(function(){

		$('.content').addClass('focu4');
	}).blur(function(){

		$('.content').removeClass('focu4');
		// $('.content').addClass('shake');
		
	})

	/*
	当用户名失去焦点的时候，验证用户名是否正确
		用户不输入内容，不验证
		1.字母数字下划线
		2.必须由字母开头
		3.6-18个字符
		4.账号已经注册
	*/
	var userBool = false;

	$('.user').blur(function(){
		userBool = false;
		//获取用户输入的值
		var value=$(this).val().trim();

			//初始化，去除所有的样式
			$('.content').removeClass('zc1');
			$('.inp').removeClass('zc');
			$('.inp').removeClass('zc2');
			$('.content').removeClass('success1')
			$('.inp').removeClass('success')
			$('.content .username').removeClass('shake');

		// 用户没有输入内容
		if(value.length==0) {
			return;
		}

		// 当失去焦点的时候，获取ul中的第一个li的内容，并写入到input中
		// 获取加入.com的值
		var text=$('.select li:eq(0)').text();
		$(this).val(text);
		// 当失焦的时候让下拉框隐藏,延迟200ms，因为失焦在点击的前面
		$('.select').delay(200).hide(0);
		
		var reg1=/^\w+$/;
		//如果验证不通过的时候
		if (!reg1.test(value)) {
			
			
			$('.username small.one').text('请用字母、数字或下划线命名');

			$('.content').removeClass('success1')
			$('.content').addClass('error1');
			//晃动
			$('.content .username').addClass('shake');

			return false;

		}
		//必须以至少一个字母开头
		var reg2=/^[a-zA-Z]+/;
		if(!reg2.test(value)) {

			$('.username small.one').text('帐号须由字母开头，尝试注册当前帐号？');

			$('.content').addClass('error1');
			$('.inp').addClass('error');
			//晃动
			$('.content .username').addClass('shake');

			return false;
		}

		// //账号必须是6-18个字符
		var reg3=/^\w{6,18}$/;
		if(!reg3.test(value)) {

			$('.username small.one').text('帐号须由6-18个字符组成，尝试注册当前帐号？');
			
			$('.content').addClass('error1');
			$('.inp').addClass('error');
			//晃动
			$('.content .username').addClass('shake');

			return false;
		}
		//判断用户名是否注册

		$.post('assets/js/php/reg.php', { username: value }, function(msg) {
            if (msg.success == 1) {
                $('.username small.one').text('该账号已注册');

                $('.content').addClass('zc1');
				$('.inp').addClass('zc');
				$('.inp').addClass('zc2');
				//晃动
				$('.content .username').addClass('shake');
               
                // return false;
            } else {
                $('.username small.one').text('');
           
                $('.content').addClass('success1 success');	
                $('.content').removeClass('error');
                userBool = true;
				
            }
        }, 'json');

	}).keyup(function(){
		
			// 当按键抬起的时候，展示下拉框，将输入的内容写入到每个li的em中
			$('.select').show();
			var content=$(this).val();
			$('.select li').find('em').text(content);
			$('.content').removeClass('shake');
		
	})

	// 点击li，让点击的li内容写入到input.user中
	$('.select li').click(function(){
		$('.user').val($(this).text());
	})

	/*
	当密码失去焦点的时候，验证密码是否正确
		1.密码须由6-16个字符组成，区分大小写
		2.密码过于简单
	*/
	var passBool=false;
	$('.password .pass').blur(function(){

		passBool=false;

		$('.content').removeClass('error3');
		$('.content').removeClass('succ shake');

		//获取用户输入的值
		var value=$(this).val().trim();

		// 用户没有输入内容
		if(value.length==0) {
			return;
		}

		var res1=/^[0-9]+$/;
		if(res1.test(value)) {
			$('.password small.two').text('密码过于简单，请重新设置');
			$('.content').addClass('error2');
			$('.content').addClass('error3');
			//晃动
			$('.content').removeClass('shake');
			// $('.content .password').addClass('shake');

			return false;
		}

		var res2=/^.{6,16}$/;
		if(!res2.test(value)) {
			$('.password small.two').text('密码须由6-16个字符组成，区分大小写');
			$('.content').removeClass('shake');
			$('.content').addClass('error2 error3');
			$('.content .password').addClass('shake');
			
		} else {
			passBool=true;
			$('.password small.two').text(' ');
			$('.content').addClass('succ');
			$('.content').removeClass('error3 shake');
		}
	}).keyup(function(){
		$('.content').removeClass('shake');
	})
		
		/*
		当确认密码失去焦点的时候，验证密码是否正确
		1.密码须由6-16个字符组成，区分大小写
		2.密码不一致
		*/
		var okBool=false
		$('.okpass .okpassword').blur(function(){
			okBool=false;
			var value=$(this).val().trim();

			if(value.length==0){
				return;
			}

			var rega=/^.{6,16}$/;
			if(!rega.test(value)) {
				$('.okpass .three').text('密码须由6-16个字符组成，区分大小写');
				$('.content').addClass('cuo redbd');
				//晃动

				$('.content').removeClass('shake');
				$('.content .okpass').addClass('shake');
				return;
			} 
			if ($(this).val()!=$('.pass').val()){

				$('.okpass .three').text('密码不一致');
				$('.content').addClass('cuo redbd');
				//晃动
				$('.content .okpass').addClass('shake');
			} else {
				$('.okpass .three').text('');
				$('.content').removeClass('cuo redbd');
				$('.content').addClass('dui');
				okBool=true;
			}
		}).keyup(function(){
			$('.content .okpass').removeClass('shake');
		})
		

	// 手机号
	var numBool=false;
	$('.n').blur(function(){
		numBool=false;
		$('.four').text('');
		$('.content .num').addClass('shake');
		$('.content').removeClass('numred numdui numcuo');

		var value=$(this).val().trim();

		if (value.length==0) {
			return;
		}
		var regnum=/^(13[0-9]|14[57]|15[012356789]|17[35678]|18[0-9]|199)[0-9]{8}$/;
		if(!regnum.test(value)) {
			$('.four').text('请输入正确的手机号');
			$('.content').addClass('numcuo numred');
			//晃动
			$('.content .num').addClass('shake');

			return;
		} else {
			$('.four').text('');
			$('.content .num').removeClass('shake');
			// $('.content').removeClass('numcuo numred');
			$('.content').addClass('numdui');
			numBool=true;
		}
	}).keyup(function(){
		$('.content').removeClass('shake');
	})

	// 聚焦手机号，如果用户名没有输入内容的时候，阻止输入内容，用户名的选框变为红色，提示请先输入账号
	$('.n').focus(function(evt){
		$('.username small.one').text('');
		$('.content .num').removeClass('shake');	

		// 如果用户名为空的时候，显示
		if($('.user').val()=='') {
			// console.log('空');
			$('.username small.one').text('请先输入账号');
			$('.content').addClass('zc1 error shake');			  
       	    return;
		}
		// console.log($('.user').val().indexOf('@'));

		// 如果用户名不正确的时候,提示请先输入账号
		 if (!userBool) {
			
			$('.username small.one').text('请先输入账号');

			$('.content .num').addClass(' error shake');	
			return;

		} else {
			$('.content').removeClass('shake numred error');
		}
		
	}).keypress(function(evt){
		// 如果用户名为空的时候，禁止键盘输入
		if($('.user').val()==''){

			evt.preventDefault(); //禁止键盘输入  
			// $('.content').removeClass('shake');  
			console.log('不正确');
			return;
		}
		// 如果用户名不正确的时候，禁止键盘输入
		if (!userBool) {
			evt.preventDefault(); //禁止键盘输入
			$('.content').addClass('shake');	
			console.log('不正确2');
			return;

		}else {
			// $('.username small.one').text('');
			console.log('正确时候');
			$('.content .num').removeClass('shake numred error ');
			// $('.content').addClass('numdui');
		}
	})

	// 点击注册
	$('.tijiao').submit(function(){
		
		if(userBool && passBool && okBool && numBool){

		}else {
		
			return false;

		}
	})

	 //输入内容的时候，显示后面的删除
	 //点击删除的时候，清空输入的值,删除所有的class类

 	 var zh=document.querySelector('.username input');
	 var mima=document.querySelector('.password input');
	 var ok=document.querySelector('.okpass input');
	 var num=document.querySelector('.num input');
	 var xianshi=document.querySelectorAll('.del');

	 //账号
	 zh.oninput=function(){
	 	xianshi[0].className='sw';
	 
	 	xianshi[0].onclick=function(){
	 		//内容清空，
	 		zh.value='';
	 		
	 		//初始化，去除所有的样式
			$('.content').removeClass('zc1 success1 error1');
			$('.inp').removeClass('zc zc2 success error');
			//删除后面的提示内容
			$('.one').text('');
			// 隐藏x
			xianshi[0].className='';
			return;
	 	}
	 }
	 // 密码
	 mima.oninput=function(){
	 	xianshi[1].className='sw1';

	 	xianshi[1].onclick=function(){
	 		mima.value='';
	 		xianshi[1].className='';
	 		$('.two').text('');
	 		$('.content').removeClass('succ error3 error2');
	 		return;
	 	}
	 }
	 // 确认密码
	  ok.oninput=function(){
	 	xianshi[2].className='sw2';

	 	xianshi[2].onclick=function(){
	 		ok.value='';
	 		xianshi[2].className='';
	 		$('.three').text('');
	 		$('.content').removeClass('cuo redbd dui');
	 		return;
	 	}
	 }
	 // 手机号
	 num.oninput=function(){
	 	xianshi[3].className='sw3';

	 	xianshi[3].onclick=function(){
	 		
	 		num.value='';
	 		xianshi[3].className='';
	 		$('.content').removeClass('numcuo numred numdui');
	 		$('.four').text('');
	 		return;
	 	}
	 }



	 //鼠标点击勾选的时候，背景图片切换
	 $('.gouxuan').click(function(){
	 	var xuan=$(this).attr('data');
	 	if(xuan=='false'){
	 		$('.yinsi .gouxuan').addClass('shan');

	 		$(this).attr('data','true')
	 	} else {
	 		$('.yinsi .gouxuan').removeClass('shan');

	 		$(this).attr('data','false')
	 	}
	 	// 如果有背景图片就让背景图片删除，如果没有，就添加
	 	// $('.yinsi .gouxuan').addClass('shan');
	 })

	//鼠标移入.yuan 显示.dianji .img
	$('.dianji').mouseover(function(){

		$('.dianji .img').show();
	}).mouseout(function(){
		$('.dianji .img').hide();

	})

	
})