$(document).ready(function() {

//Scroll-spy
$('body').scrollspy({ target: '#navbar' });  
    
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
    var i = 0; for (; i < 5; i += 1) {
      setTimeout(function addSmoke() {
        var time = Math.random() * 1000 + 3000,
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


  // Scroll on button click

  $("#learnMore").click(function(){
    $('#pencils').animatescroll({});
  });

  //////////Animate when scrolled to/////////////


  // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook:"onLeave"
    }
  });

  TweenMax.set("#tabletop-easel", {top: "-=950"});
  TweenMax.set("#palette", {left: "-=1500"});
  TweenMax.set("#brushes", {right: "-=950"});
  var $computer = $("#computer");
  var $easel = $("#tabletop-easel");
  var $palette = $("#palette");
  var $pencils = $("#pencils");
  var $brushes = $("#brushes");
  // build tween
  var swap = new TimelineMax()
 
    .to("#computer", 1, {
        onStart: function () {$computer.addClass("animated bounceOutUp").removeClass("bounceInDown");},
        onReverseComplete: function () {$computer.removeClass("bounceOutUp").addClass("bounceInDown");}}
    )

    .to("#tabletop-easel", 1, {top: "+=950",
        onStart: function () {$easel.addClass("animated bounceInDown").removeClass("bounceOutUp");},
        onReverseComplete: function () {$easel.removeClass("bounceInDown").addClass("bounceOutUp");}
        }
    )
    .to("#palette", 1, {left: "+=1500",
        onStart: function () {$palette.addClass("animated bounceInLeft").removeClass("bounceOutLeft");},
        onReverseComplete: function () {$palette.removeClass("bounceInLeft").addClass("bounceOutLeft");}
        }
    )
    .to("#pencils", 1, {
        onStart: function () {$pencils.addClass("animated bounceOutUp").removeClass("bounceInDown");},
        onReverseComplete: function () {$pencils.removeClass("bounceOutUp").addClass("bounceInDown");}}
    )

    .to("#brushes", 1, {right: "+=950",
        onStart: function () {$brushes.addClass("animated bounceInRight").removeClass("bounceOutRight");},
        onReverseComplete: function () {$brushes.removeClass("bounceInRight").addClass("bounceOutRight");}
        }
    );


  function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $a1 = $("path#a1");
  var $a2 = $("path#a2");
  var $p1 = $("path#p1");
  var $p2 = $("path#p2");
  var $ainting = $("path#ainting");
  var $line1 = $("path#line1");
  var $dot1 = $("path#dot1");
  var $dot2 = $("path#dot2");
  var $That = $("path#That");
  var $line2 = $("path#line2");
  var $line3 = $("path#line3");
  var $N = $("path#N");
  var $ever = $("path#ever");
  var $D = $("path#D");
  var $ries = $("path#ries");
  var $dot3 = $("path#dot3");

  // prepare SVG
  pathPrepare($a1);
  pathPrepare($a2);
  pathPrepare($p1);
  pathPrepare($p2);
  pathPrepare($ainting);
  pathPrepare($dot1);
  pathPrepare($dot2);
  pathPrepare($line1);
  pathPrepare($That);
  pathPrepare($line2);
  pathPrepare($line3);
  pathPrepare($N);
  pathPrepare($ever);
  pathPrepare($D);
  pathPrepare($ries);
  pathPrepare($dot3);

  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($a1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($a2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($p1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($p2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($ainting, .05, {strokeDashoffset: 0, ease:Linear.easeNone})) 
    .add(TweenMax.to($dot1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($dot2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($line1, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($That, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($line2, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($line3, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($N, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($ever, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($D, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to($ries, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))  
    .add(TweenMax.to($dot3, .05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.from("path", 1, {opacity: 0, ease:Linear.easeNone}), 0)// change color during the whole thing
    .add(TweenMax.to(".dripwrapper", .5, {opacity: 1, ease:Linear.easeNone}), 0);


  // Pin both the Desk and About sections 
  var startpin = new ScrollMagic.Scene({
    duration: 600
  })
  .setPin(".start", {pushFollowers: false})
  .addTo(controller);

  var startpin1 = new ScrollMagic.Scene({
    duration: 600
  })
  .setPin("#about")
  .addTo(controller);

  // Computer Easel Swap Scene
  var SceneSwap = new ScrollMagic.Scene({
    duration: 250,
    offset:100
  })
  .setTween(swap)
  .addTo(controller);

  // Draw on SVG Text Scene
  var SceneText = new ScrollMagic.Scene({
    duration: 250,
    offset:350,
    tweenChanges: true
  })
  .setTween(tween)
  .addTo(controller);

});