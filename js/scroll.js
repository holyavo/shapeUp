 $(document).ready(function(){
     
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