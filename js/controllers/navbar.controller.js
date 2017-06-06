(function() {
    //
    angular.module('app')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = ['$window'];

    function NavBarController($scope, $window) {
        var vm = this;
        vm.showDropdownMenu = showDropdownMenu;

        function showDropdownMenu($event) {
            console.log($event.currentTarget);
        }
    }

}());
