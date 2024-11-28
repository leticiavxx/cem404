$(document).ready(function() {
     $('#mobile_btn').on('click',function () {
        $('#mobile_menu').find('i').toggleClass('active');
     });

     const sections = $('section');
     const navItems = $('nav-item');

     