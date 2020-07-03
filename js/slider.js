$(document).ready(function () {
    $('.trainers-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            //variableWidth: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1175,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        dots: true,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true,
                    }
                },
                {
                    breakpoint: 724,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                                
                    }
                },
                {
                    breakpoint: 490,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,      
                        dots: true,
                    }
                }
                                
            ]
        });
    
     $('.testimonials-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            //variableWidth: true,
            infinite: true,
            dots: true,
         responsive:[
             {
                 breakpoint: 1150,
                 settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                                 infinite: true,
                        dots: true,
                }
             }
         ] 
     });
    
     $('.photo-slider__container').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            centerMode: true,
            centerPadding: '200px',
         dots:true,
         responsive:[
             {
                 breakpoint: 1150,
                 settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                     centerPadding: '150px',
                }
             },
            {
                 breakpoint: 800,
                 settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                     centerPadding: '50px',
                }
             },
             {
                 breakpoint: 600,
                 settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
             },


         ] 
     });
    
        $('.news__container').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
         responsive:[
             {
                 breakpoint: 1170,
                 settings:{
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        //dots: true,
                }
             },
             
            {
                 breakpoint: 945,
                 settings:{
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                }
             },
             
            {
                 breakpoint: 587,
                 settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                }
             },
         ] 
     });
        $('.price__body').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
         responsive:[
             {
                 breakpoint: 844,
                 settings:{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                }
             },
            {
                 breakpoint: 542,
                 settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                }
             },
         ] 
     });
});