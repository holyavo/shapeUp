$(document).ready(function () {
   $('.video-img').click(function (event) {
       var src = $(this).attr("data-src");
       console.log(src);
       $(".video").attr("src", src);
   });
});