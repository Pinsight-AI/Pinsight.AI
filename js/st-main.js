(function( $ ){
    'use strict';
     window.FontAwesomeConfig = { autoReplaceSvg: false }


    $('.show-searchpanel').on('click',function(){
        $('.header-search-panel').removeClass('hide-search-panel');
        $('.header-search-panel').addClass('show-search-panel');
        $('.sch-sh-input').addClass('animation_search_box');
        $('.header-search-panel button').addClass('animation_search_btn');
    });
 
     $('.close-searchpanel').on('click',function(){
        $('.header-search-panel').removeClass('show-search-panel');
        $('.header-search-panel').addClass('hide-search-panel');
        $('.sch-sh-input').removeClass('animation_search_box');
        $('.header-search-panel button').removeClass('animation_search_btn');
     });

     /* sticky sidebar */
     $('.st-header-sidebar').on('click',function(){
        $('.sticky-sidebar-layer').removeClass('close-ss-layer');
        $('.sticky-sidebar-self').removeClass('close-ss-self');

        $('.sticky-sidebar-layer').addClass('show-ss-layer');
        $('.sticky-sidebar-self').addClass('show-ss-self');

        $('body').css({'overflow':'hidden'});
      }) ;

      $('.cls-ss').on('click',function(){
        $('.sticky-sidebar-layer').addClass('close-ss-layer');
        $('.sticky-sidebar-self').addClass('close-ss-self');

        $('body').css({'overflow':'auto'});

      });

  /* Sidebar */
 $('.widget-content ul li ul').parent('li').addClass('removeAfter');

    $(document).on('scroll',function(){
             var currentScroolValue = $(document).scrollTop();
             if($('.st-single-comments').height() > 10) {
                 var commentsHeight = $('.st-single-comments').height();
             }else{
                 var commentsHeight = 600;
             }
            if(currentScroolValue >= 100 && currentScroolValue < $('.st-single-inner-content').height()){
                
                $('.st-single-sticky-footer').css({'background':'white','transition':'400ms','bottom':'0'})
                $('.st-sf-content-2').css({'transition':'300ms','opacity':'0' , 'visibility':'hidden'})
                $('.st-sf-content-1').css({'transition':'300ms','opacity':'1' , 'visibility':'visible'})
           
            }else if( currentScroolValue >= $('.st-single-inner-content').height() && currentScroolValue < $('.st-single-inner-content').height()+200){
              
                $('.st-sf-content-1').css({'transition':'300ms','opacity':'0' , 'visibility':'hidden'})
                $('.st-sf-content-2').css({'transition':'300ms','opacity':'1' , 'visibility':'visible'})

            }else if(currentScroolValue >= $('.st-single-inner-content').height() + commentsHeight){
          
                $('.st-single-sticky-footer').css({'transition':'300ms','bottom':'-90px'})
          
            }else if(currentScroolValue < 200 ){
               
                $('.st-single-sticky-footer').css({'transition':'300ms','bottom':'-90px'})

            }

            if(currentScroolValue > $('.st-banner').height()){
               $('.support_sticky').addClass('enable_sticky_header');
            }else if(currentScroolValue <= 10){
                $('.support_sticky').removeClass('enable_sticky_header');
            }
     });
    
    /* Single blog share icons */
    $(".soc-one-item").on({
        mouseenter: function () {
            $('.soc-one-item').css({'transition':'200ms','opacity':'0.5'})
            $(this).css({ 'opacity':'1'})
        },
        mouseleave: function () {
            $('.soc-one-item').css({ 'opacity':'1'})
        }
    });
    
  /* Mobile Mewnu */
    $.fn.mobMenu = function() {
        $(this).next('ul').toggle('slow' );

        if($(this).hasClass('fa-angle-right')){

            $(this).removeClass('fa-angle-right');
            $(this).addClass('fa-angle-down');

        }else if($(this).hasClass('fa-angle-down')){

            $(this).addClass('fa-angle-right');
            $(this).removeClass('fa-angle-down');
        }
    }; 

     $('.down-submenu').on('click',function(){
         $(this).mobMenu();
     });

    /* Banner "First Letter" effect */
 if(document.body.contains(document.getElementById('banner-heading'))){
    var bannerSelf = document.getElementById('banner-heading').textContent;
    
    if(bannerSelf.length > 0){
        document.getElementById('st-banner-bgcl').innerHTML = bannerSelf[0];
        document.getElementsByClassName('st-banner-nocontent').innerHTML = null ;
    }
 }
  

     /* Tilt Effect */
     var tiltLM = document.getElementsByClassName('js-tilt');
     tiltLM.tilt;
     
})( jQuery );


 