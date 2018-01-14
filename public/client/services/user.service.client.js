(function () {
    angular
        .module("LearningApp")
        .factory("UserService", userService);

    function userService($http) {

        var api = {
            "register" : register,
            "login" : login,
            "logout" : logout
        }
        return api;

        function logout(user) {
            return $http.post("/api/user/logout", user)
        }

        function login(user) {
            return $http.post("/api/user/login", user);
        }

        function register(user) {
             console.log("Client Service: "+user);
            return $http.post("/api/user/register", user);
        }
    }
})();