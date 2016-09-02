/**
 Version: 0.1.0
 Author: Raphael Giordano Silva
 Website: http://rgiordano.github.io/simple-floating
 Docs: http://rgiordano.github.io/simple-floating
 Repo: http://github.com/RGiordano/simple-floating
 Issues: http://github.com/RGiordano/simple-floating/issues
 */

$.fn.simpleFloating = function(container,top) {
    var bottom_wrap = ($(container).offset().top+$(container).height());
    var $sidebar   = $(this),
        $window    = $(window),
        offset     = $sidebar.offset();

    if(typeof top === "undefined")
    {
        var topPadding = 0;
    }
    else
    {
        var topPadding = top;
    }

    $window.scroll(function() {
        bottom_wrap = ($(container).offset().top+$(container).height());
        var bottom_side = ($sidebar.offset().top+$sidebar.height());
        if ($window.scrollTop() > (offset.top-topPadding)) {
            if(bottom_side < bottom_wrap) {
                if(($window.scrollTop() - offset.top + topPadding) <= bottom_wrap - (offset.top+$sidebar.height())){
                    var topo = $window.scrollTop() - offset.top + topPadding;
                }else{
                    var topo = bottom_wrap - (offset.top+$sidebar.height());
                }
                $sidebar.stop().animate({
                    marginTop: topo
                });
            }else{
                if(($window.scrollTop() - offset.top + topPadding) <= bottom_wrap - (offset.top+$sidebar.height())){
                    //console.log('teste1');
                    var topo = $window.scrollTop() - offset.top + topPadding;
                    $sidebar.stop().animate({
                        marginTop: topo
                    });
                }
            }
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });
}