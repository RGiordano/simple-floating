/**
 Version: 0.2.1
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

    var sidebar   = jQuery(this),
        offset     = sidebar.offset();

    /*
     * Top is deprecated and will be removed soon
     * */
    if(typeof top === "undefined")
        var topPadding = 0;
    else
        var topPadding = top;

    jQuery(window).scroll(function() {
        var screen_top = jQuery(window).scrollTop();
        var bottom_wrap = jQuery(container).offset().top + jQuery(container).height();
        //var bottom_sidebar = jQuery(sidebar).offset().top + jQuery(sidebar).height();
        var limit_top = offset.top;

        /*if(bottom_sidebar >= bottom_wrap)
            return true;*/

        if (screen_top > limit_top) {
            var top = screen_top - jQuery(container).offset().top;
            var maxTop = bottom_wrap - jQuery(sidebar).height() - jQuery(container).offset().top;

            if(top >= maxTop) {
                top = maxTop;
            }

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