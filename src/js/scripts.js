/* overlayForm */
$(document).ready(function(){
  $('.openPopupForm').on("click", function(){
    $('.overlayForm').show();
  });
  $('.closePopupForm').on("click", function(){
    $('.overlayForm').hide();
  });
});

/* overlayStory */
$(document).ready(function(){
  $('.openPopupStory').on("click", function(){
    $('.overlayStory').show();
  });
  $('.closePopupStory').on("click", function(){
    $('.overlayStory').hide();
  });
});

/* feedback-slider */
$('.feedback-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});

/* scrollbar */
(function($){
  $(window).on("load",function(){
      $(".feedback-item__text, .story-wrapper").mCustomScrollbar({
        theme:"my-theme"
      });
  });
})(jQuery);