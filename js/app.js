(function() {
    angular.module('app', [
        'ui.router',
        'ngSanitize'
    ]);

    angular.module('app').run(function($rootScope, $window, $location) {

        // angular.element(document).ready(function() {
		//     $window.jQuery('.js-fullheight').css('height', $window.jQuery($window).height());
        // });

        // $rootScope.$watch(function() {
        //     return $location.path();
        // }, function(a){
		//     $window.jQuery('.js-fullheight').css('height', $window.jQuery($window).height());
        // });

        // $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
        //     $window.jQuery('.js-fullheight').css('height', $window.jQuery($window).height());
        // });

        // angular.element($window).bind('resize', function(){
        //     angular.element(document).ready(function() {
        //         $window.jQuery('.js-fullheight').css('height', $window.jQuery($window).height());
        //     });
        // });
    });

}());