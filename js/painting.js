// LIGHTBOX

$( document ).ready(function() {
			// ACTIVITY INDICATOR

		var activityIndicatorOn = function(){
			$( '<div id="imagelightbox-loading"><div></div></div>' ).appendTo( 'body' );
			},
			activityIndicatorOff = function(){
				$( '#imagelightbox-loading' ).remove();
			},


			// OVERLAY
			overlayOn = function(){
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
			},
			overlayOff = function(){
				$( '#imagelightbox-overlay' ).remove();
			},

			// CLOSE BUTTON

			closeButtonOn = function( instance ){
				$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
			},
			closeButtonOff = function(){
				$( '#imagelightbox-close' ).remove();
			};
			
		//	Used Parameters

		$('a').imageLightbox(
		{
			onStart:		function() { overlayOn(); closeButtonOn(); },
			onEnd:			function() { overlayOff(); closeButtonOff(); activityIndicatorOff(); },
			onLoadStart: 	function() { activityIndicatorOn(); },
			onLoadEnd:	 	function() { activityIndicatorOff(); $( '.imagelightbox-arrow' ).css( 'display', 'block' ); }
		});

});