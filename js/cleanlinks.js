$(document).ready(function(){
  $("a").attr('target' ,'_blank');

	var nm;
	var d = new Date();
	var n = d.getHours();

		if(n > 18 || n < 7){
			nm = 1;
			$(".nightmode").css("color", "#d9d9d9");
			$(".nightmode").css("font-style", "italic");
			$(".list-header").css("color", "#d9d9d9");
			$(".lead").css("color", "#d9d9d9");
			$("h1").css("color", "white");
			$("img").css("filter","invert(90%)");
			$("img").css("-webkit-filter","invert(90%)");
			$("body").css("backgroundColor","#1a1a1a");
      $(".nightmode").html("Day Theme ");
      $(".nightmode").append("<span style='position: relative; top: 2px; left: 2px;' class='ss-icon'>sun</span>");
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
      $(".nightmode").html("Night Theme ");
      $(".nightmode").append("<span style='position: relative; top: 2px; left: 2px;' class='ss-icon'>cloud</span>");
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
      $("a").css("color","#fff");
      $(".nightmode").html("Day Theme ");
      $(".nightmode").append("<span style='position: relative; top: 2px; left: 2px;' class='ss-icon'>sun</span>");
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
      $("a").css("color","#337ab7");
      $(".nightmode").html("Night Theme ");
      $(".nightmode").append("<span style='position: relative; top: 2px; left: 2px;' class='ss-icon'>cloud</span>");s
		}
  });

});
