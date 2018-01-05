(function () {
    angular
        .module("LearningApp")
        .factory("UserService", userService);

    function userService($http) {

        var api = {
            "register" : register,
            "login" : login
        }
        return api;

        function login(user) {
            return $http.post("/api/user/login", user);
        }

        function register(user) {
             console.log("Client Service: "+user);
            return $http.post("/api/user/register", user);
        }
    }
})();