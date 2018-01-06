(function () {
    var app = angular.module("LearningApp")
    app.controller("LoginController", loginController);

    function loginController($location, UserService) {
        var vm = this;
        vm.register = register;
        vm.login = login;

        function init() {//Why undefined //check with alert
            vm.user = undefined;
            vm.error = undefined;
        }
        init();

        function register() {
            $location.url("/register");
        }

        function login(user) {
            if(user && user.username && user.password){
                UserService
                    .login(vm.user)
                    .then(function (user) {
                        user = user.data;
                        console.log("Here we come back");
                        $location.url('/host/' + user._id+'/todo');
                    }, function (err) {
                        vm.error = "Invalid Credentials";
                    });
            }
        }

    }
})();