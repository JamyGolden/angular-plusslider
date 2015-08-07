/*
 * angular-plusslider
 * An agnostic AngularJS content slider that is easily configurable
 * Angular wrapper for PlusSlider https://github.com/JamyGolden/PlusSlider
 * Version: "1.0.0"
 * Jamy Golden (http://css-plus.com/)
 * https://github.com/JamyGolden/angular-plusslider
 * License: MIT
 */
(function(window, angular, $, undefined){
'use strict';

angular.module('ngPlusSlider', [])

.directive('plusslider', function($timeout){
    var _slider = null;

    return {
        restrict: 'A',
        scope: {
            plussliderOptions: '='
        },
        link: function(scope, element) {
            _slider = new $.plusSlider(element, scope.plussliderOptions)

            scope.$on('destroy', function(){
                _slider.destroy();
            })
        }
    }
})

})(window, angular, jQuery);
