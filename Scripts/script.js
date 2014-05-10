$(document).ready(function() {
	var MSIE = ($.browser.msie) && ($.browser.version <= 8);
//--------twitter	
	$('.twitter span').animate({opacity:0},1)
	
		$('.twitter').hover(function(){
		if(!MSIE)
		{	
		$('.twitter').find('span').stop().animate({opacity:1},1300,'easeOutExpo')
		}
		else
		{
		$('.twitter').find('span').stop().animate({opacity:1},0,'easeOutExpo')
		}
	}, function(){
		if(!MSIE)
		{
		$('.twitter').find('span').stop().animate({opacity:0},500,'easeOutExpo')
		}else
		{
		$('.twitter').find('span').stop().animate({opacity:0},0,'easeOutExpo')
		}
	})
//--------social	
	$('.soc_icon>span').css({opacity:0})
	$('.soc_icon').hover(function(){
	$(this).find('>span').stop().animate({opacity:1},400,'easeOutExpo')
	},function(){
		$(this).find('>span').stop().animate({opacity:0},700,'easeOutExpo')
	})
//--------list	
	$('.contUL li a').hover(function(){
	$(this).stop().animate({color:'#fff'})
	},function(){
	$(this).stop().animate({color:'#000'})
	})
//-------submenu 
	$('.submenu li a').hover(function(){
		if(!MSIE){
			$(this).find('>span.back').stop(true).animate({left:140},800, 'easeOutExpo')
			$(this).find('>span.act').stop(true).animate({left:0},500, 'easeOutExpo')
		}else{
			$(this).find('>span.back').css({color:'#91af54'},0)
		}
	}, function(){
		if (!$(this).hasClass('sfHover')) {
			if(!MSIE){
				$(this).find('>span.back').stop(true).animate({left:0},500,'easeOutExpo')
				$(this).find('>span.act').stop(true).animate({left:-140},800, 'easeOutExpo')
			}else{
				$(this).find('>span.back').stop(true).css({color:'#fff'},0)	
			}
		}
	})
//-----banners	
	$('.banners li').hover(function(){
		if(!MSIE)
		{
			$(this).find('span.ban_grey').stop().animate({top:"0px"},500,'easeOutExpo')
			$(this).find('span.ban_grey>.bannerCont').stop().animate({top:"10px"},500,'easeOutExpo')
			$(this).find('span.ban_grey>.pics').stop().animate({top:"20px"},2000,'easeOutElastic')
			
			$(this).find('span.ban_color').stop().delay(10).animate({bottom:"-15px"},900,'easeOutElastic')

		}else
		{
			$(this).find('span.ban_grey').stop().animate({top:"0px"},800,'easeOutExpo')
			$(this).find('span.ban_grey>.bannerCont').stop().animate({top:"10px"},900,'easeOutExpo')
			
			$(this).find('span.ban_color').stop().delay(90).animate({bottom:"-20px"},500,'easeOutCubic')
		
		}
	}, function(){
		if(!MSIE)
		{
			$(this).find('span.ban_grey').stop().delay(80).animate({top:"-15px"},1500,'easeOutElastic')
			$(this).find('span.ban_grey>.bannerCont').stop().delay(80).animate({top:"0px"},500,'easeOutBack')
			$(this).find('span.ban_grey>.pics').stop().animate({top:"0px"},2000,'easeOutElastic')
			
			$(this).find('span.ban_color').stop().animate({bottom:"0px"},800,'easeOutExpo')
		
		}else
		{
			$(this).find('span.ban_grey').stop().delay(0).animate({top:"-20px"},500,'easeOutCubic')
			$(this).find('span.ban_grey>.bannerCont').stop().delay(0).animate({top:"0px"},500,'easeOutCubic')
			
			$(this).find('span.ban_color').stop().animate({bottom:"0px"},800,'easeOutExpo')

		}
	})

	$('.btn_anim1').sprites({method:'gStretch',hover:true})
	$('.btn_anim1').hover(function(){
	//	$(this).stop().animate({bottom:"10px"})		
	}, function(){
	//	$(this).stop().animate({bottom:"20px"})					   				   
	})
	
	$('.btn_anim2').sprites({method:'gStretch',hover:true})
	$('.btn_anim2').hover(function(){
	//	$(this).stop().animate({bottom:"10px"})		
	}, function(){
	//	$(this).stop().animate({bottom:"20px"})					   				   
	})
	
		$('.btn_anim3').sprites({method:'gStretch',hover:true})
	$('.btn_anim3').hover(function(){
	//	$(this).stop().animate({bottom:"10px"})		
	}, function(){
	//	$(this).stop().animate({bottom:"20px"})					   				   
	})
	
		$('.btn_anim4').sprites({method:'gStretch',hover:true})
	$('.btn_anim4').hover(function(){
	//	$(this).stop().animate({bottom:"10px"})		
	}, function(){
	//	$(this).stop().animate({bottom:"20px"})					   				   
	})
	
		$('.btn_anim5').sprites({method:'gStretch',hover:true})
	$('.btn_anim5').hover(function(){
	//	$(this).stop().animate({bottom:"10px"})		
	}, function(){
	//	$(this).stop().animate({bottom:"20px"})					   				   
	})

	
 });
 

