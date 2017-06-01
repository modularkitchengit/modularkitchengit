(function() {

    angular.module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
			.state('app', {
				abstract: true,
				url: '',
				template: '<ui-view/>'
			})
            .state('app.home', {
                url: '',
                templateUrl: 'views/home.html'
            })
            .state('app.about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('app.contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('app.gallery', {
                url: '/gallery',
                templateUrl: 'views/gallery.html'
            })
            .state('app.specs', {
                url: '/specs',
                templateUrl: 'views/specs.html'
            })
            .state('app.designs', {
                url: '/designs',
                templateUrl: 'views/designs.html'
            })
            .state('app.products', {
                url: '/products',
                templateUrl: 'views/products.html'
            });
    }
}());