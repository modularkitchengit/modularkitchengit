(function() {
    angular.module('app', [
        'ui.router',
        'ngSanitize'
    ]);

    angular.module('app').run(function ($transitions) {
        $transitions.onStart({}, function () {
            $window.jQuery('.js-fh5co-nav-toggle').removeClass('active');
            $window.jQuery('body').removeClass('offcanvas');
        });
    });

}());