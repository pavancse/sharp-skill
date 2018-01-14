(function () {
    angular
        .module("LearningApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "client/views/user/templates/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/host/:hid/todo", {
                templateUrl: "client/views/todo/templates/todo.view.client.html",
                controller: "TodoController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "client/views/user/templates/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });
    };
})();