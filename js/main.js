$(document).ready(function(){

	//> Controls active menu item
	$('div.channel').on('click', function(){
		$('div.channel').removeClass('active');
		$(this).addClass('active');
	});
	//<

	//> Scrolls to selected menu item when mouseleaves #channelselect
	$('#channelselect').on('mouseleave',function(){
		var whoActive = $('div.channel.active'); // Searches for 'active' class element.
		var index = $('div.channel').index(whoActive); // Returns index value of 'active' element.
		var posActive = (index * 100); // Determines position to scroll to, icon size being: 100.
		$('#channelselect').animate({scrollTop: posActive}, 300);
	});
	//<

	$('div.show').on('mouseleave', function(){
		$(this).animate({scrollTop: 0}, 500, 'easeOutExpo');
	});

	//> Prevents scroll of whole page when reaching limit of #channelselect
	$('#channelselect'||'.loadoverlay').on('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;

    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
	});
	//<

	//> Things to happen when page loads
	$(window).load(function(){
		$('.loadoverlay').fadeOut(500);

		//> Adds buttons underneath each div.show element in order to add show to stash
		$('div.show').each(function(){
			var uid = $(this).attr('uid');
			$(this).append('<input type="button" value="Add this to Stash" uid='+uid+'></input');
		});
		//<

		$('div.show:first-of-type').before('<div class="edge"></div>');

		$('div.show > input').on('click',function(){
			alert($(this).parent().attr('uid')); // Will make AJAX post (sending UID) to php script and return video data and editing tools.
		});

	});
	//<


});