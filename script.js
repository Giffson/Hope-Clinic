AOS.init();

$('.galleryPage').toggleClass('active');

$('.nav-link').click(function(){
    debugger;
  if( $('.navbar-collapse').hasClass('show')){
    $('.navbar-collapse').removeClass('show');
   }
});

$('.slider-container').slick({
    dots: true,
    isFinite: true,
    autoplay: true
});
