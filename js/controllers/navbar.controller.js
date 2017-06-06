(function() {
    //
    angular.module('app')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = ['$window'];

    function NavBarController($scope, $window) {
        var vm = this;
        vm.showDropdownMenu = showDropdownMenu;
        vm.text="hello";

        function showDropdownMenu($event) {
            console.log($event.currentTarget);
        }
    }

}());
