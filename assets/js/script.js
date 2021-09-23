$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});

$(document).ready(function() {
    console.log("script.js Ready");

    // JS Menu mobile
    function closeMenu() {
        $('.menu-fullpage').removeClass('show');
        $('.overlay-menu, .btn-menu-mobile').removeClass('active');
    }
    $(".has-submenu > .btn-toggle-sub").on("click", function(e){
        var parentli = $(this).closest('li');
        if(parentli.hasClass('opened')) {
            parentli.removeClass('opened');
            parentli.find('> ul.sub-menu').slideUp(400);
        } else {
            parentli.addClass('opened');
            parentli.find('> ul.sub-menu').slideDown(400);
        }
        parentli.siblings('li').removeClass('opened');
        parentli.siblings('li').find('.has-submenu.opened').removeClass('opened');
        parentli.siblings('li').find('ul:visible').slideUp();
    })
    $('.btn-menu-mobile').on("click", function(){
        $('.overlay-menu').toggleClass("active");
        $('.btn-menu-mobile').toggleClass("active");
        $(".menu-fullpage").toggleClass("show");
        return false;
    })
    $('.overlay-menu').on("click", function(){
        closeMenu();
    })
    

    $(window).on('resize load', function () {
        var ptop = 0;
        if($(window).width() < 767) {
            ptop = 73;
        }
        
        $(".menu-fullpage ul li a[href^='#']").on("click", function(scroll_to_target) {
            closeMenu();
            scroll_to_target.preventDefault();
            var a = this.hash,
                i = $(a);
            $("html, body").stop().animate({
                scrollTop: i.offset().top - ptop
            }, 800, "swing", function() {})
        })
    });
});