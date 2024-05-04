$("#slider-satuan, #slider-satuan-eksternal").slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	nextArrow: false,
	prevArrow: false,
	autoplaySpeed: 2500,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
	]
});

var winWidth = $(this).width();
if(winWidth < 361) {
  $("#map-wrapper iframe").css("width", "330px");
}
var imgWidth = $(".content p img").attr("width");
var contentWidth = $(".content").width();

if(imgWidth && imgWidth > contentWidth ) {
  $(".content p img").attr("width", contentWidth-50);
  $(".content p img").attr("height", "auto");
}