module.exports = function (app, $http) {

    converter = require('google-currency');

    app.get("/api/currency/:amount", getConversionAmount);



    function getConversionAmount(req, res) {
        var amount = req.params.amount;
        console.log("Amount received in server: "+amount);
        options = {
            from: "INR",
            to: "USD",
            amount: amount
        }
        converter(options).then(function (value) {
            res.json(value.converted);
        },function (err) {
            res.sendStatus(500).send(err);
        });
    }
};