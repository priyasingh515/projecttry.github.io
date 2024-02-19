
jQuery( document ).ready(function() {

    // Portfolio image control
    jQuery('.gallery').mixItUp();
    
  // Back to top link  
      var offset = 400;
      var duration = 500;
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > offset) {
              jQuery('.back-to-top').fadeIn(duration);
          } else {
              jQuery('.back-to-top').fadeOut(duration);
          }
      });
  
      jQuery('.back-to-top').click(function(event) {
          event.preventDefault();
          jQuery('html, body').animate({scrollTop: 0}, duration);
          return false;
      })  
    
    // Controls the fixed header  
      var $window = jQuery(window);
      var nav = jQuery('#header-wrapper');
      $window.scroll(function(){
          if ($window.scrollTop() >= 100 && $window.width() > 797) {
             nav.addClass('fixed-header');
          }
          else {
             nav.removeClass('fixed-header');
          }
      });
      
    // Add class to navigation home
      jQuery('li a:contains("Home")').addClass('home');
  
    // Slider
      jQuery('.flexslider').flexslider({
          animation: "slide",
          controlNav: false
  });
  
  
   jQuery('.flexslider').flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          prevText: "",           
          nextText: "",
          slideshow: false,
          animateHeight: false,
          sync: "#carousel",
          start: function(){
           jQuery('.flexslider ul.slides img').show(); 
          },
        });	
  
      jQuery('.feature-block').hover(function(){
          jQuery(".reveal").css('display','block').stop().animate({"opacity": "1"}, "slow");
          jQuery(".main").css('display','none').stop().animate({"opacity": "0"}, "slow");
        },
        function(){
          jQuery(".reveal").css('display','none').stop().animate({"opacity": "0"}, "slow");
          jQuery(".main").css('display','block').stop().animate({"opacity": "1"}, "slow");
        }
      );
      
  // If side.php is used, reduce main content container size
      if (jQuery("#side").hasClass("side")){
        jQuery("#main-content").addClass("has-side");
      }
      
      var social = jQuery('#social-wrapper').height();
      var footer = jQuery('#footer-wrapper').height();
      var limit = social + footer;
     // console.log(limit);    
      jQuery('#side').sticky({topSpacing:40, bottomSpacing:limit}); 	
  
       if(!jQuery("#main-content").hasClass("has-side")){
              jQuery("#main-content").css("padding-top","30px");
       }    
       
  });