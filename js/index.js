
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if(top>0){
    $('header').css({'opacity':'0.7'});
  }else{
    $('header').css({'opacity':'1'});
  }
});
$('.line_images').hover
(function(){
  fadeSpeed = 450;
  $('.line2').stop(true, false).fadeIn(fadeSpeed);
  $('.line1').stop(true, false).fadeOut(fadeSpeed);
},
function(){
  $('.line2').stop(true, false).fadeOut(fadeSpeed);
  $('.line1').stop(true, false).fadeIn(fadeSpeed);
});

$('.buy_images').hover
(function(){
  $('.buy2').show();
},
function(){
  $('.buy2').hide();
});

$("#owl-demo").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay:true
    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
});

$(".lb_product").rlightbox({counterDelimiter: " of "});

last_imgClass = '.pic1';
$('.show_hair').bind('click',function(){
  var imgClass = $(this).attr('href');
  $('.black_mask').each(function(){
    $(this).removeClass('active');
  });
  $(this).children('.black_mask').addClass('active');
  $(last_imgClass).fadeOut(300);
  $(imgClass).fadeIn(300);
  last_imgClass = imgClass;
  return false;
});