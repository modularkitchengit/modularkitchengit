(function() {

    angular.module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider'];

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .when('/gallery', {
                templateUrl: 'views/gallery.html'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
}());