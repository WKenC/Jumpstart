$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var howfarScrolled = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - howfarScrolled > 50){
      var navheight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navheight}, 150);
      howfarScrolled = scrollTop;
    } else if (howfarScrolled - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      howfarScrolled = scrollTop;
    }
  });
  
});
