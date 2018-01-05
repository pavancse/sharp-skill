module.exports = function (app) {

    var mongoose = require('mongoose');

    var connectionString = 'mongodb://127.0.0.1:27017/firstMeanProjDB';

    mongoose.connect(connectionString, function (err, db) {
        if(err){

        }
    });

    var model = require('./model/model.server')(mongoose);

    require("./services/service.service.server.js")(app);
    require("./services/user.service.server.js")(app, model.userModel);
};