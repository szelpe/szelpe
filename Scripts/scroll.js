$(function () {
    $('.banners a').each(function (index, link) {
        var $link = $(link);
        
        if(typeof _gaq !== "undefined")
            _gaq.push(['_trackEvent', 'Banners', $link.attr('href')]);
        
        if($link.attr('href').indexOf('http') === 0)
            return;
            
        $link.click(function (e) {
            e.preventDefault();
            $.scrollTo($($link.attr("href")), 800, { easing: 'swing' });
        });
    });
    
    $('#FollowMe a').click(function () {
        var $link = $(this);
        
        if(typeof _gaq !== "undefined")
            _gaq.push(['_trackEvent', 'FollowMeBanners', $link.attr('class')]);
    });
});