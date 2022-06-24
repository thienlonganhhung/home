'use strict';
var DnDMoM = {};

DnDMoM = (function($){
	var $window = $(window);
	return {
		scaleObject: function(selector, actualSize, direction, recalc, position) {
            var _fn_ = function() {
                var $rzObj = $(selector);
                var ratio = $window.outerWidth()/actualSize;
                if(direction == 'width') {
                    var thisWidth = $window.outerWidth();
                    if(thisWidth < actualSize) {
                        ratio = thisWidth/actualSize;
                    }
                }else {
                    if(direction == 'height') {
                        var thisHeight = $window.outerHeight();
                        ratio = thisHeight/actualSize;                       
                    }
                }
                resizeObject($rzObj, ratio);

                function resizeObject($rzObj, lastRatio) {
                    var pos = position == '' ? '0 0' : position;
                    $rzObj.css({
                        'transform': 'scale(' + lastRatio + ')',
                        '-webkit-transform-origin': pos,
                        '-moz-transform-origin': pos,
                        '-ms-transform-origin': pos,
                        '-o-transform-origin': pos,
                        'transform-origin': pos,
                    });
                    if(recalc) {
                        // $rzObj.parent().css('width', $rzObj.outerWidth() * lastRatio + 'px');
                        $rzObj.parent().css('height', $rzObj.outerHeight() * lastRatio + 'px');
                    }
                }
            }
            $window.on('resize', _fn_);
            _fn_();
        }
	}
})(jQuery);