//go top icon

$(document).ready(function()
{
  $(window).scroll(function(){
        if ($(this).scrollTop() > 200 ) {

              $('.scrollup').fadeIn();

          } else {

              $('.scrollup').fadeOut();

          }

      });
      $('.scrollup').click(function(){


          $("html, body").animate({ scrollTop: 0 },600);

          return false;

      });
});
