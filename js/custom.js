window.sr = new scrollReveal();

$(document).ready(function() {

  $('.fadeTo').hover(function(){
    $(this).find('img').stop().fadeTo('slow',.5);}, function(){
    $(this).find('img').stop().fadeTo('slow',1);
	});
    
//clock 
         
  setInterval( function() {
  var seconds = new Date().getSeconds();
  var sdegree = seconds * 6;
  var srotate = "rotate(" + sdegree + "deg)";
  
  $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
      
  }, 1000 );
  

  setInterval( function() {
  var hours = new Date().getHours();
  var mins = new Date().getMinutes();
  var hdegree = hours * 30 + (mins / 2);
  var hrotate = "rotate(" + hdegree + "deg)";
  
  $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
      
  }, 1000 );


  setInterval( function() {
  var mins = new Date().getMinutes();
  var mdegree = mins * 6;
  var mrotate = "rotate(" + mdegree + "deg)";
  
  $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
      
  }, 1000 );
               
		
		
//steam

  (function () {
    "use strict";

    var i = 0;
    for (; i < 5; i += 1) {
      setTimeout(function addSmoke() {
        var
          time = Math.random() * 1000 + 3000,
          smoke = $('<div />', {
            class: 'smoke',
            css: {
              opacity: 0,
              left: Math.random() * 30
            }
          });
        
        // add to viewport
        $(smoke).appendTo('#viewport');

        // animate
        $.when(
          // animate to 100% opacity in half the time (fade in)
          $(smoke).animate({
            opacity: 1
          }, {
            duration: time / 2,
            easing: 'linear',
            queue: false,
            
            // animate to 0% opacity in the remaining time (fade out)
            complete: function () {
              $(smoke).animate({
                opacity: 0
              }, {
                duration: time / 2,
                easing: 'linear',
                queue: false
              });
            }
          }),

          // animate movement
          $(smoke).animate({
            bottom: $('#viewport').height()
          }, {
            duration: time * 1.4,
            easing: 'linear',
            queue: false
          })

        // when all down, remove and add new random smoke
        ).then(function () {
          $(smoke).remove();
          addSmoke();
        });
      }, Math.random() * 10000);
    }
  }());


  //////////Animate when scrolled to/////////////


  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook:"onLeave"
    }
  });

  var swap = new TimelineMax()
    .add([
        TweenMax.to("#start #computer", 1, {bottom: $(window).height(), top:"-=400"})
      ]);

  var startpin = new ScrollMagic.Scene({
    duration: 700
  })
  .setPin(".start")
  .addTo(controller);

  var computerSwap = new ScrollMagic.Scene({
    duration: 300,
    offset:260
  })
  .setTween(swap)
  .addTo(controller);

  // Scene Handler
  /*var scene = new ScrollMagic.Scene({
    triggerElement: ".start", // point of execution
    duration: $(window).height() - 300, // pin element for the window height - 1
    triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  })
  .setPin(".start"); // the element we want to pin

  // Add Scenes to ScrollMagic Controller
  controller.addScene([
    scene
  ]);*/

  /*$(window).scroll(function() {
  		$('#palette').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+650) {
  				$(this).addClass("animated bounceInRight");
  			}
  		});
  	});
  	
  $(window).scroll(function() {
  		$('#brushes').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+600) {
  				$(this).addClass("animated bounceInLeft");
  			}
  		});
  	});
  	
  $(window).scroll(function() {
  		$('#text2').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+800) {
  				$(this).addClass("animated bounceInLeft");
  			}
  		});
  	});		


  $(window).scroll(function() {
  		$('#tabletop-easel').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+200) {
  				$(this).addClass("animated bounceInDown");
  			}
  		});
  	});
  	
  $(window).scroll(function() {
  		$('#palette').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+600) {
  				$(this).addClass("animated bounceInRight");
  			}
  		});
  	});

  $(window).scroll(function() {
  		$('#pencils, #phone').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+640) {
  				$(this).addClass("animated fadeOutRightBig");
  			}
  		});
  	});
  	
  	$(window).scroll(function() {
  		$('#computer').each(function(){
  		var imagePos = $(this).offset().top;

  		var topOfWindow = $(window).scrollTop();
  			if (imagePos < topOfWindow+200) {
  				$(this).animate({ 
          top: "-=500px",
        },1000 );
  			}
  		});
  	});*/	

//Scroll-spy

  $('body').scrollspy({ target: '.navbar-example' }) 		 

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })

});