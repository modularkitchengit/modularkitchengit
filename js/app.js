(function() {
    angular.module('app', [
        'ngRoute'
        // 'ui.router'
    ]);

    angular.module('app').run(function($rootScope, $window) {
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            // window = $windowProvider.$get();
            $window.dispatchEvent(new Event('resize'));
        });
    });

    // angular.module('app')
    //     .config(stateConfig);
    // stateConfig.$inject = ['$stateProvider'];

    // function stateConfig($stateProvider) {
    //     $stateProvider.state({
    //         name: 'home',
    //         url: '/',
    //         templateUrl: 'views/home.html'
    //     }).state({
    //         name: 'about',
    //         url: '/about',
    //         templateUrl: 'views/about.html'
    //     }).state({
    //         name: 'gallery',
    //         url: '/gallery',
    //         templateUrl: 'views/gallery.html'
    //     }).state({
    //         name: 'contact',
    //         url: '/contact',
    //         templateUrl: 'views/contact.html'
    //     });
    // }

}());