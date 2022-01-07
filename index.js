jQuery(document).ready(function () {
    jQuery(function () {
       $('.mymenu').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('open');
      });
  
      $('.navhidediv').click(function (e) {
        e.preventDefault();
        $('body').removeClass('open');
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
       $('.myheader ,.brand,.headImg3,.icon-bar,.topcircle').addClass("header-fixed");
        } else {  $('.myheader ,.brand,.headImg3,.icon-bar,.topcircle').removeClass("header-fixed");  }
      });
    });
  
   
  });
      
      function myscroll(myID) {
        var offset = jQuery("#" + myID).offset()
        window.scrollTo(0, offset.top);
        
      }
    