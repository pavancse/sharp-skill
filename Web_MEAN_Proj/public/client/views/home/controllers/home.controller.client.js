(function () {
    var app = angular.module("LearningApp");
    app.controller("CurrencyController", currencyController);

    function currencyController(CurrencyService) {
        var vm = this;

        //todo handlers
        vm.convertRate = convertRate;

        function convertRate(amount) {
            console.log("Amount sent from controller: "+amount);
            CurrencyService
                .getConvertionRate(amount)
                .then(function (response) {
                    console.log("Response received from controller: "+ response);
                    vm.usd = response.data;
                }, function (err) {
                    vm.error = "Error";
                })
        }
    }
})();