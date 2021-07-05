$(function() {
    $(".gnb ul li").mouseover(function(){
        $(this).find(".depth2").stop().slideDown(300);
    });
    $(".gnb ul li").mouseout(function(){
        $(this).find(".depth2").stop().slideUp(300);
    });


    $('.mo_gnb > ul >li > a').click(function() {
        $('.mo_sub').stop().slideUp();
        $('.mo_gnb > ul > li').removeClass('on');
        $(this).parent().find('.mo_sub').stop().slideToggle(function() {
            if ($(this).parent().find('.mo_sub').is(':hidden')) {
                $(this).parent().removeClass('on');
            } else {
                $(this).parent().addClass('on');
            }
        });
    });
    $('.open').click(function() {
        $('body').css('overflow-y', 'hidden');
        $('.mo_gnb,.mo_bg').stop().animate({
            right: '0',
            opacity: 'show'
        }, 1000);
    });

    $('.close, .mo_bg').click(function() {
        $('body').css('overflow-y', 'auto');
        $('.mo_sub').stop().slideUp();
        $('.mo_gnb > ul > li').removeClass('on');
        $('.mo_gnb,.mo_bg').stop().animate({
            right: '-100%',
            opacity: 'hide'
        }, 1000);
    });

});