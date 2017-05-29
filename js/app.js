(function() {
    angular.module('app', [
        'ui.router'
    ]);

    angular.module('app')
        .config(stateConfig);
    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/',
            templateUrl: 'views/home.html'
        }).state({
            name: 'about',
            url: '/about',
            templateUrl: 'views/about.html'
        }).state({
            name: 'gallery',
            url: '/gallery',
            templateUrl: 'views/gallery.html'
        }).state({
            name: 'contact',
            url: '/contact',
            templateUrl: 'views/contact.html'
        });
    }
}())