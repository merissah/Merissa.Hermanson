$(document).ready(function() {
	
    $('.animated').mouseenter( function () {
        $(this).attr('src', $(this).attr('src').replace(/\.jpg/, '.gif') );
    });
    $('.animated').mouseleave(function(){
      $(this).attr('src', $(this).attr('src').replace(/\.gif/, '.jpg') );
    });
	
});