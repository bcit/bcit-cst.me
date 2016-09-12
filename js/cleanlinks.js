$(document).ready(function(){
  $("a").attr('target' ,'_blank');
  
	var nm;
	var d = new Date();
	var n = d.getHours();

		if(n > 18){
			nm = 1;
			$(".nightmode").css("color", "#d9d9d9");
			$(".nightmode").css("font-style", "italic");
			$(".list-header").css("color", "#d9d9d9");
			$(".lead").css("color", "#d9d9d9");
			$("h1").css("color", "white");
			$("img").css("filter","invert(90%)");
			$("img").css("-webkit-filter","invert(90%)");
			$("body").css("backgroundColor","#1a1a1a");
		}
		else{
			nm = 0;
			$(".nightmode").css("color", "#686a6e");
			$(".nightmode").css("font-style", "normal");
			$(".list-header").css("color", "#686a6e");
			$(".lead").css("color", "#686a6e");
			$("h1").css("color", "black");
			$("img").css("filter","invert(0%)");
			$("img").css("-webkit-filter","invert(0%)");
			$("body").css("backgroundColor","white");
		}
  $(".nightmode").click(function(){
	
	    if(nm === 0){
			nm = 1;
			$(".nightmode").css("color", "#d9d9d9");
			$(".nightmode").css("font-style", "italic");
			$(".list-header").css("color", "#d9d9d9");
			$(".lead").css("color", "#d9d9d9");
			$("h1").css("color", "white");
			$("img").css("filter","invert(90%)");
			$("img").css("-webkit-filter","invert(90%)");
			$("body").css("backgroundColor","#1a1a1a");
		}
		else{
			nm = 0;
			$(".nightmode").css("color", "#686a6e");
			$(".nightmode").css("font-style", "normal");
			$(".list-header").css("color", "#686a6e");
			$(".lead").css("color", "#686a6e");
			$("h1").css("color", "black");
			$("img").css("filter","invert(0%)");
			$("img").css("-webkit-filter","invert(0%)");
			$("body").css("backgroundColor","white");
		}
  });

});
