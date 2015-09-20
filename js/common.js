$(document).ready(function() {

    //slider
    $("#owl-demo").owlCarousel({

        autoPlay: 7500, //Set AutoPlay to  seconds
        navigationText : false,
        navigation : true, // Show next and prev buttons
        singleItem : true,
        items : 1,
        itemsDesktop: false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,

        //Basic Speeds
        slideSpeed : 400,
        paginationSpeed : 1000,
        rewindSpeed : 2000,

        //Autoplay
        stopOnHover : true
    });

    //pop-up
    $('.popup').magnificPopup({type:'image'});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {



    // анимация css старая
    $("h1").animated("fadeInDown", "fadeOut");
    $(".block").animated("bounceInUp", "");
    $(".item").animated("rollIn", "");
    $(".club_video img").animated("flipInY", "flipInY");
    $(".video_about a").animated("zoomInRight", "fadeOutLeft");
    $(".block_review img").animated("zoomInRight", "zoomInRight");
    $(".block_review p").animated("fadeInUp", "fadeOut");
    
})