

(function($){
    "use strict";
    
    var $document = $(document),
        $window = $(window),
        $htmlBody = $('html, body'),
        $body = $('body'),
        $navbar = $('.navbar'),
        $navbarCollapse = $('.navbar-collapse'),
        $pageScrollLink = $('.page-scroll'),
        $scrollToTop = $('.scroll-to-top'),
       
        navHeight = 80,
        navHeightShrink = 60;
    
    
    
   
    $document.ready(function(){
        
       
        $window.on('scroll', function(){
        
            
            if ($document.scrollTop() > navHeight){
                
                /** Shrink navigation */
                $navbar.addClass('shrink');
                
                /** Scroll to top */
                $scrollToTop.fadeIn();
            }
            else{
                
                /** Shrink navigation */
                $navbar.removeClass('shrink');
                
                /** Scroll to top */
                $scrollToTop.fadeOut();
            }
        });  
            
      
       
    });
})(jQuery);