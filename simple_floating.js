/**
 Version: 0.1.6
 Author: Raphael Giordano Silva
 Website: http://rgiordano.github.io/simple-floating
 Docs: http://rgiordano.github.io/simple-floating
 Repo: http://github.com/RGiordano/simple-floating
 Issues: http://github.com/RGiordano/simple-floating/issues
 */

jQuery.fn.simpleFloating = function(container,top) {
    if(jQuery(this).length==0)
        return false;

    if(jQuery(container).length==0)
        return false;

    var bottom_wrap = (jQuery(container).offset().top+jQuery(container).height());
    var sidebar   = jQuery(this),
        offset     = sidebar.offset();

    if(typeof top === "undefined")
        var topPadding = 0;
    else
        var topPadding = top;

    jQuery(window).scroll(function() {
        var screen_top = jQuery(window).scrollTop();
        bottom_wrap = (jQuery(container).offset().top+jQuery(container).height());
        var max_top = offset.top-topPadding;

        if (jQuery(window).scrollTop() > max_top) {
            var top = screen_top - jQuery(container).offset().top + topPadding;

            if((top+sidebar.height()+offset.top) > (bottom_wrap))
                top = bottom_wrap - sidebar.height() - jQuery(container).offset().top;

            sidebar.stop().animate({
                marginTop: top
            });
        } else {
            sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

    return true;
}