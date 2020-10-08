$(document).ready(function()
{
	
});
$(window).load(function(){
	var wH = parseInt($(window).height());
	var cH = parseInt($('.content').height());
	var tmpH = wH - 276;
	if(tmpH > cH)
	{
		$('.container').height(tmpH);
	}
});
