$(function () 
{
	console.log("hello")
	$(window).on("scroll", function() 
	{
		
        if($(window).scrollTop() > 50) 
        {
        	
            $("header").addClass("site-header-active");
            $("header").removeClass("site-header");
        } 
        else 
        {
            //remove the background property so it comes transparent again
           $("header").removeClass("site-header-active");
           $("header").addClass("site-header");
        }
    });
});