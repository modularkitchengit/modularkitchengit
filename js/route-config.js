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
            /**
             * Designs
             */
            .state('app.designs', {
                url: '/designs',
                abstract: true
            })
            .state('app.designs.ushape', {
                url: '/ushape',
                templateUrl: 'views/designs/ushape.html'
            })
            .state('app.designs.lshape', {
                url: '/lshape',
                templateUrl: 'views/designs/lshape.html'
            })
            .state('app.designs.parallel', {
                url: '/parallel',
                templateUrl: 'views/designs/parallel.html'
            })
            .state('app.designs.straight', {
                url: '/straight',
                templateUrl: 'views/designs/straight.html'
            })
            .state('app.designs.compact', {
                url: '/compact',
                templateUrl: 'views/designs/compact.html'
            })
            /**
             * Products
             */
            .state('app.products', {
                url: '/products',
                abstract: true
            })
            .state('app.products.kitchen', {
                url: '/kitchen',
                templateUrl: 'views/products/kitchen.html'
            })
            .state('app.products.wardrobes', {
                url: '/wardrobes',
                templateUrl: 'views/products/wardrobes.html'
            })
            .state('app.products.crockery', {
                url: '/crockery',
                templateUrl: 'views/products/crockery.html'
            })
            .state('app.products.tvracks', {
                url: '/tvracks',
                templateUrl: 'views/products/tvracks.html'
            })
            .state('app.products.poojadesign', {
                url: '/poojadesign',
                templateUrl: 'views/products/poojadesign.html'
            })
            .state('app.products.bookshelves', {
                url: '/bookshelves',
                templateUrl: 'views/products/bookshelves.html'
            })
            .state('app.products.comptables', {
                url: '/comptables',
                templateUrl: 'views/products/comptables.html'
            })
            .state('app.products.studytable', {
                url: '/studytable',
                templateUrl: 'views/products/studytable.html'
            })
            .state('app.products.shoerack', {
                url: '/shoerack',
                templateUrl: 'views/products/shoerack.html'
            });
    }
}());