$(document).ready(function () {
   $('.menu-burger').click(function (event) {
       $('.menu-burger , .navigation:first').toggleClass('active');
       $('body').toggleClass('lock');
   });
});