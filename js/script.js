    'use strict';

      // console.log('ok');
      $(window).scroll(function(){
        if($(this).scrollTop()>320){
          $('#fusa').addClass('fix');
        };
        if($(this).scrollTop()<10){
          $('#fusa').removeClass('fix');
        };
      }); //window_scroll


      $(document).ready(function(){
        $('#open_nav').on('click',function(){
            $('.main-nav').toggleClass('show');
        });
    });
