// 滚动
window.onload = function(){

//增加title
	$('a').each(function() {
		$(this).attr({
			title: $(this).text()
		});
	});


//首页大图滚动	
    var s1 = new zScroll({
        container : '.sy #scroll',
        button: false
    });
//首页滚动2    
	var s2 = new zScroll({
        container : '.sy #s2',
        previewNum: 4,
        prevClass:'le',
        nextClass:'ri',
        pagination: false,
        single: true,
        loop:true,
        updateOnImagesReady :false

    });
//首页政务服务滚动
	var s3 = new zScroll({
        container : '.sy #s3',
        button: false,
        updateOnImagesReady :false,
        paginationPosition: 'under'
    });  
	
	var _i = 0;     

    $('.sy .sl3 span').hover(function(){
    	var index = $(this).index();
    	if(index == 1){
    		$(this).closest('.sl3').addClass('active');
    		$(this).closest('.zw').children('.ct').hide().eq(1).show();
    		if(_i == 0){
				var s4 = new zScroll({
			        container : '#s4',
			        button: false,
			        updateOnImagesReady :false,
			        paginationPosition: 'under'
			    }); 
			    _i = _i +1;
		    }
    	}else{
    		$(this).closest('.sl3').removeClass('active');
    		$(this).closest('.zw').children('.ct').hide().eq(0).show();
    		
    	}
    },function(){})


//要闻动态滚动
	var s4 = new zScroll({
        container : '.ywdt #s1',
        button: false,
        updateOnImagesReady :false
    }); 
    var s5 = new zScroll({
        container : '.ywdt #s2',
        previewNum: 4,
        prevClass:'le',
        nextClass:'ri',
        pagination: false,
        single: true,
        loop:true,
        updateOnImagesReady :false
    }); 



};




// 切换
$(function(){
// 首页要闻切换 
	$('.dtxw .cr .sl span').hover(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.cr').find('.ct').hide().eq(index).show();
	},function(){});
//首页互动交流区切换
	$(".sy .sl2 span").hover(function(){
		var index = $(".sy .sl2 span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.slc2').find('.ct').hide().eq(index).show();
	},function(){})
//游云南切换 
	$('.sy .yyn .sl4 span').hover(function(){
		var index = $(this).index();
		$(this).closest('.yyn').find('.ct').hide().eq(index).show();
		if(index == 1){
			$(this).closest('.sl4').addClass('active');
		}else{
			$(this).closest('.sl4').removeClass('active');
		}
	},function(){})
//部门动态切换
	$(".sy .szfh .tit span").hover(function(){
		var index = $(".sy .szfh .tit span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.szfh').find('.ls').hide().eq(index).show();
	},function(){})
//人事任免切换 
	$(".sy .rsrm .tit span").hover(function(){
		var index = $(".sy .rsrm .tit span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.rsrm').find('.ls').hide().eq(index).show();
	},function(){})
//要闻动态切换
	$('.ywdt .sl span').hover(function(){

		var index = $(".ywdt .sl span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.cr').find('.ls').hide().eq(index).show();
		$(this).closest('.sl').find('.more a').hide().eq(index).show();

	},function(){})

	$('.ywdt .sl2 span').hover(function(){

		var index = $(".ywdt .sl2 span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.ct').find('.cc').hide().eq(index).show();
		$(this).closest('.sl2').find('.more a').hide().eq(index).show();

	},function(){})
//政务公开切换
	$('.zwgk .sl2 span').hover(function(){

		var index = $(".zwgk .sl2 span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.cl').find('.cont .ls').hide().eq(index).show();
		$(this).closest('.sl2').find('.more a').hide().eq(index).show();

	},function(){})
	// 20190322
	$('.zwgk .cr .sl span').hover(function(){

		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.cr').find('.ct .ls').hide().eq(index).show();
		$(this).closest('.cr').find('.ct .ls').hide().eq(index).show();

	},function(){})
	// 20190322





//意见征集切换卡
	$('.hdjl .yjzj .tit span').hover(function(){

		var index = $(".hdjl .yjzj .tit span").index($(this));
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.yjzj').find('.ct').hide().eq(index).show();

	},function(){})




	//网址导航
	$('.linknav>li').hover(function(){
	    // var index = $(this).index();
	    $(this).addClass('cur').siblings().removeClass('cur');
	    // $('.linkbox').hide().eq(index).show();
	},function(){
		$(this).removeClass('cur');
	});

//改变字号


	$('.fsw span').click(function(){
	    var _el = $('.TRS_UEDITOR  p');
	    var _ft = parseFloat(_el.css('font-size'));
	    var cName = $(this).attr("class");
	    if(cName == "b"){
			if( _ft<= 22 ){ 
				_ft += 2; 
			} 
		}else if(cName == "s"){
			_ft -= 2;
	     }else if(cName == 'm'){
	                _ft = 16;
	     }
	     _el.css("font-size", _ft );
	     // console.log(_ft );
	})

});	