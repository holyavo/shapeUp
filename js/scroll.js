 $(document).ready(function(){
     /*STICKY*/
     var w = $(window);
     var header = $('.header__top');
     var wrapper = $('#sticky-wrapper');
     
     w.load(function(){

        header.sticky({topSpacing: 0});

         
         w.resize(function(){
           
                header.sticky({topSpacing: 0});
        });
     });
     

        $(".navigation__item").on("click", function (event) {
            
            if($(".menu-burger").hasClass("active")){
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1000);
                
                $('body').toggleClass('lock');
                $('.menu-burger, .navigation:first').toggleClass('active');
            }else{
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1000);
            }
        });
});