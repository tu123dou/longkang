$("document").ready(function(){
 
 $(".mainContect").find("img").css("height","auto");  
 $(".mainContect .con").find("img").css("height","auto");
  
 $(".nav > li").hover(function(){
	$(this).addClass("on");
    $(this).children("div").stop(true,true).slideDown();
 },function(){
    $(this).removeClass("on");
	$(this).children("div").stop(true,true).slideUp();
 })

  dingwei();
var pgname = document.location.href; 	
	  pgname=pgname.replace(/\?.*$/,'')
	  pgname=pgname.replace(/^.*\//,'')
if(pgname=="index.php"||pgname==null||pgname==""){
	upscrolling();
	$(".bann").css("height","400px");
	$("#focus").css("height","400px");
	$("#focus ul").css("height","400px");
	$("#focus ul li").css("height","400px");
}
  $("#navChild a:last-child ").css("border-bottom","none")
  
  $(".piclist li:nth-child(3n)").css("margin-right","0px");
  $(".piclist li").hover(function(){
  	$(this).toggleClass("hover");
  });
  
    // $(".proListPic li").mouseover(function(){
     	//alert("jq");
    	//$(this).addClass("hover");
   // },function(){
    	//$(this).removeClass("hover");
    //});
  
  $(".proclass li:nth-child(2n)").css({"margin-right":"0px","margin-bottom":"0px"});
  $(".newsList ul li:first-child").find("a").css("color","#348502")
  $(".newsList ul li:last-child").css("border-bottom","none")
  $(".newsList").eq(1).css("padding-top","20px")
  
  $('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
	$('.backup').click(function(){
		$('body,html').animate({scrollTop:0},500)
	});
	$(".backup").hide();
	$(function() {
		$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$(".backup").fadeIn(1000);
			}else{
				$(".backup").fadeOut(1000);
			}
		});
	});
	
  
  $(".procla_list > ul > li ").click(function(){
		$(this).next("ul").slideToggle();
		$(this).toggleClass("open");
	});
  $(".procla_list > ul > li:last-child ").css("border-bottom","none");	
 

	$(".mainConList ul li:last-child").css("border-bottom","none");
	$(".mainConList .pic2:last-child").css("border-bottom","none");
	$(".pic1:nth-child(3n)").css("margin-right","0");
//	$(".pic1 li").hover(function(){
//	  	$(this).toggleClass("hover");
//	  });
   $(".pic11:nth-child(3n)").css("margin-right","0");
  
	
	$(".pglist ul li").not(".on").not(".last").not(".next").hover(function(){ $(this).addClass("on");},function(){$(this).removeClass("on");})
	$(".pglist ul li.last").hover(function(){
		  $(this).css({background:"url(images/lastBg2.jpg) 6px center no-repeat #57b016",border:"1px solid #25af14"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/lastBg.jpg) 6px center no-repeat #e7fcd5",border:"1px solid #a8d489"}).find("a").css({color:"#25af14"});
	 })
	$(".pglist ul li.next").hover(function(){
		  $(this).css({background:"url(images/nextBg2.jpg) 56px center no-repeat #57b016",border:"1px solid #25af14"}).find("a").css({color:"#fff"});
	 },function(){
		   $(this).css({background:"url(images/nextBg.jpg) 56px center no-repeat #e7fcd5",border:"1px solid #a8d489"}).find("a").css({color:"#25af14"});
	 })
	$(".pglist ul li.font").hover(function(){ $(this).css({background:"#f9f3d7",color:"#666",border:"none"});})

    if($(".mainContect").find("img").width() > 600) {
		$(".mainContect").find("img").css({"height":"auto","width":"100%"});
	}
  
});


$("document").ready(function(){
	//case
	var page=1;
	var i=1;
	var box=$('.newsPic ul');
	var n=$('.newsPic li').length;
	var h=$('.newsPic li').width();
	var pagetotal=Math.ceil(n/i);
	$('.picleft').bind('click',upwardsfn);
	$('.picright').bind('click',downfn);	
	function upwardsfn(){
		if(page>1){
			box.animate({ marginLeft : '+='+h }, "slow");
			page--;
			$(".picright").find("img").attr('src','images/picrightB.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picrightB.jpg*/);	
			if(page<=1){
				$('.picleft').find("img").attr('src','images/picleftW.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picleftW.jpg*/);
			}else{
				$('.picleft').find("img").attr('display','images/picleftB.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picleftB.jpg*/);	
			}
		}
	}
	function downfn(){
		if(pagetotal>page){
			box.animate({ marginLeft : '-='+h }, "slow");
			page++;
			$(".picleft").find("img").attr('src','images/picleftB.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picleftB.jpg*/);	
			if(page>=pagetotal){
				$('.picright').find("img").attr('src','images/picrightW.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picrightW.jpg*/);
			}else{
				$('.picright').find("img").attr('src','images/picrightB.jpg'/*tpa=http://www.huaqiangtong.com/js/images/picrightB.jpg*/);	
			}
		}
	}

});

function addColor(id){
	//document.getElementById("addColorPic"+id).style.cssText="border:2px solid #57b015";
//	document.getElementById("addColorTitle"+id).style.background="#57b015";
}
function removeColor(id){
	//document.getElementById("addColorPic"+id).style.cssText="border:2px solid #bae39b";
//	document.getElementById("addColorTitle"+id).style.background="#348502";
}
//导航定位
function dingwei(){
	var nav = document.getElementById("nav"); 
	var links = nav.getElementsByTagName("li"); 
	var lilen =$("#nav").find("li");
	
	var st2=new Array();
	var str1=new Array();
	var urrenturl = document.location.href; 	
	st2= urrenturl.split("_")
	var last = 0; 
	for (var i=0;i<links.length;i++) 
	{ 
	    linkurl =  lilen[i].getAttribute("rel"); 
		str1 = linkurl.split("/");
		var length2 = str1.length-1;
		str11 = str1[length2].split(".");
		 if(st2[0].indexOf(str11[0])!=-1) 
			{ 
			 last = i; 
			}
	} 
	links[last].className = "menu";
}
function scrolling(a,b,c){
	var speedp=30;
	var tabp=document.getElementById(a);
	var tab1p=document.getElementById(b);
	var tab2p=document.getElementById(c);
	tab2p.innerHTML=tab1p.innerHTML;
	function Marqueep(){
	if(tab2p.offsetWidth-tabp.scrollLeft<=0)
	tabp.scrollLeft-=tab1p.offsetWidth
	else{
	tabp.scrollLeft++;
	}
	}
	var MyMarp=setInterval(Marqueep,speedp);
	tabp.onmouseover=function() {clearInterval(MyMarp)};
	tabp.onmouseout=function() {MyMarp=setInterval(Marqueep,speedp)};
}

function upscrolling(){
	var speed=40;
	sdemo2.innerHTML = sdemo1.innerHTML;
	function Marquee(){
		if(sdemo2.offsetHeight - sdemo.scrollTop <= 0) {
			sdemo.scrollTop -= sdemo1.offsetHeight;
		} else{
			sdemo.scrollTop++;
		}
	}
	var MyMar = setInterval(Marquee,speed);
	sdemo.onmouseover = function(){ clearInterval(MyMar); }
	sdemo.onmouseout = function(){ MyMar=setInterval(Marquee,speed) }
}

