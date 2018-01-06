(function () {
    var app = angular.module("LearningApp")
    app.controller("RegisterController", registerController);

    function registerController($location, UserService) {
        var vm = this;
        vm.cancel = cancel;
        vm.register = register;



        function init() {//Why undefined //check with alert
            vm.user = undefined;
            vm.error = undefined;
            vm.passworderror = undefined;
        }
        init();
        
        function register(user) {
            if(user && user.username && user.password && user.password2){
                if(user.password === user.password2){
                    UserService
                        .register(vm.user)
                        .then(function (user) {
                            user = user.data;
                            console.log(user);
                            $location.url('/host/' + user._id+'/todo');
                        }, function (err) {
                            vm.error = "Sorry, could not register";
                        });
                }else{
                    vm.passworderror = "Password and Verify password must match"
                }
            }
        }
        
        function cancel() {
            $location.url("/login");
        }
    }
})();