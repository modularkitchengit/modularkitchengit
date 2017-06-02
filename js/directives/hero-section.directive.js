(function() {
    angular.module('app')
        .directive('heroSection', HeaderElement);

    HeaderElement.$inject = [];

    function HeaderElement() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                title: '@',
                subtitle: '@'
            },
            templateUrl: 'views/partials/hero-section.html'
        }
    }

}());
