(function () {
    angular
        .module("LearningApp")
        .controller("EventController",eventController);

    function eventController($routeParams) {
        var vm = this;
        vm.hostID = $routeParams['hid'];

    }
})();