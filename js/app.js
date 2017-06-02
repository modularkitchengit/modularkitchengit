(function() {
    angular.module('app', [
        'ui.router',
        'ngSanitize'
    ]);

    angular.module('app').run(function($rootScope, $window, $location) {
        $rootScope.$on('$includeContentLoaded', function() {
            $window.mobileMenuOutsideClick();
            $window.offcanvasMenu();
            $window.burgerMenu();
            $window.contentWayPoint();
            $window.sliderMain();
            $window.dropdown();
            $window.goToTop();
            $window.loaderPage();
            $window.counterWayPoint();
            $window.fullHeight();
            $window.parallax();
            $window.DateTimePickerFunc();

            $window.jQuery('.fh5co-bg-img').each(function(){
                $window.jQuery(this).css('width', '100%');
            });
            $window.zoomFunc();
        });
    });

}());