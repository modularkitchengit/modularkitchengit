(function() {
    angular.module('app')
        .directive('footerSection', FooterElement);

    FooterElement.$inject = [];

    function FooterElement() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                title: '@',
                subtitle: '@'
            },
            templateUrl: 'views/partials/footer.html'
        }
    }

}());
