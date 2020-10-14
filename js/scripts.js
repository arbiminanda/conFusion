$(document).ready(function(){
		$('#mycarousel').carousel({interval: 2000});
		$('#carouselButton').click(function(){
				if ($('#carouselButton').children('span').hasClass('fa-pause')){ // inside where if there is an element with the span tag, in order to change class for button pause to button play
						$('#mycarousel').carousel('pause');
						$('#carouselButton').children('span').removeClass('fa-pause');
						$('#carouselButton').children('span').addClass('fa-play');
				}
				else if ($('#carouselButton').children('span').hasClass('fa-play')){
						$('#mycarousel').carousel('cycle');
						$('#carouselButton').children('span').removeClass('fa-play');
						$('#carouselButton').children('span').addClass('fa-pause');
				}
		});
		$('#reserveButton').click(function(){ //show reserveModal
				$('#reserveModal').modal('show'); 
		});
		$('#loginButton').click(function(){ 
				$('#loginModal').modal('show'); 
		});
});