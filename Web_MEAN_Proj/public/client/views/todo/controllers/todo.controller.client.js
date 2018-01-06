(function () {
    angular
        .module("LearningApp")
        .controller("TodoController",todoController);

    function todoController($routeParams) {
        var vm = this;
        vm.hostID = $routeParams['hid'];

    }
})();