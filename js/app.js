(function() {
    angular.module('app', [
        'ui.router'
    ]);

    angular.module('app').run(function($rootScope, $window) {
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            $window.dispatchEvent(new Event('resize'));
        });
    });

}());