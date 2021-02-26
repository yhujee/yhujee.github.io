// event pada saat link
$('.pagescroll').on('click', function(){
	
	// ambil isi href
	var target = $(this).attr('href');
		// tangkap element yang bersangkutan
		var elementTarget =  $(target);

		// pindahkan scroll
		$('body').animate({
			scrollTop: elementTarget.offset().top -50
					},900, 'easeInOutExpo');
});