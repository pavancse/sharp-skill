(function () {
    angular
        .module("LearningApp")
        .factory("CurrencyService", currencyService);


    function currencyService($http) {

        var api = {
            "getConvertionRate" : getConvertionRate
        };
        return api;

        function getConvertionRate(amount) {
            console.log("Amount in service: "+amount);
            return $http.get("/api/currency/"+ amount);
        }
    }

})();