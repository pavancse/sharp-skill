(function () {
    angular
        .module("LearningApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/templates/home.view.client.html",
                controller: "CurrencyController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/home"
            });
    };
})();