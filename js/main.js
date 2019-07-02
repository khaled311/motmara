$(function() {

    // // Navbar Effect On Scroll
    // var zero = 0;
    // $(window).on('scroll', function() {
    //     $(".nav.fixed-top").toggleClass('hide', $(window).scrollTop() > zero);
    //     zero = $(window).scrollTop();
    // });

    // Side Nav Open
    $(".upnav .minu").on("click", function() {
        $(".sideNav").toggleClass("open");
        $(".navBody").toggleClass("open");
        $("body").css("overflow", "hidden");
    });

    // Close Side Nav
    $(".close1").on("click", function() {
        $(".sideNav").toggleClass("open");
        $(".navBody").toggleClass("open");
        $("body").css("overflow", "auto");
    });

    $(".sideNav").on("click", function() {
        if($(".navBody").hasClass("open")){
            $(".sideNav").removeClass("open");
            $(".navBody").toggleClass("open");
            $("body").css("overflow", "auto");
        }
    });


    // Side Nav Account DropDown

    $(".accDrop .dropHead").on("click", function() {
        $(".accDrop .dropBody").slideToggle();
        $(".accDrop .arr").toggleClass("trans");
    });

    // Search
    $(".upnav .search button").on("click", function(e) {
        e.preventDefault();
        $(".upnav .search input").toggleClass("open");
    });

    // Header Slider
    $('.car-sec .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:false,
        items: 1,
        dots: true,
        smartSpeed: 1000
    });

    // Product Counting
    $('button.plus').click(function(e){
        e.preventDefault();
        var newValue = parseFloat( $(this).parent().find('.quantity').val());
        $(this).parent().find(".quantity").val((newValue)+1);
    });
    
    $('button.minus').click(function(e){
        e.preventDefault();
        var newValue = parseFloat( $(this).parent().find(".quantity").val());
        if (newValue <= 1 ) {
            
        } else {
            $(this).parent().find(".quantity").val((newValue)-1);
        }
    });

    // Trigger WOW Plugin
    new WOW().init();

})