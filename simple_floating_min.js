$.fn.simpleFloating=function(a,b){var c=$(a).offset().top+$(a).height(),d=$(this),e=$(window),f=d.offset();if("undefined"==typeof b)var g=0;else var g=b;e.scroll(function(){c=$(a).offset().top+$(a).height();var b=d.offset().top+d.height();if(e.scrollTop()>f.top-g){if(b<c){if(e.scrollTop()-f.top+g<=c-(f.top+d.height()))var h=e.scrollTop()-f.top+g;else var h=c-(f.top+d.height());d.stop().animate({marginTop:h})}else if(e.scrollTop()-f.top+g<=c-(f.top+d.height())){var h=e.scrollTop()-f.top+g;d.stop().animate({marginTop:h})}}else d.stop().animate({marginTop:0})})};