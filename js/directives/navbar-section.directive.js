(function() {
    angular.module('app')
        .directive('navbarSection', NavBarElement);

    NavBarElement.$inject = [];

    function NavBarElement() {
        return {
            restrict: "E",
            replace: true,
            templateUrl: 'views/partials/navbar.html',
            controller: 'NavBarController',
            controllerAs: 'vm'
        }
    }

}());
