$(function () {
    $('.banners a').click(function (e) {
        var $link = $(this);
        
        if(typeof ga !== "undefined")
            ga('send', 'event', 'Banners', $link.attr('href'));
        
            
        if($link.attr('href').indexOf('http') === 0)
            return;
        
        e.preventDefault();
        $.scrollTo($($link.attr("href")), 700, { easing: 'easeOutExpo' });
    });
    
    $('#FollowMe a').click(function () {
        var $link = $(this);
        
        if(typeof ga !== "undefined")
            ga('send', 'event', 'FollowMeBanners', $link.attr('class'));
    });
});