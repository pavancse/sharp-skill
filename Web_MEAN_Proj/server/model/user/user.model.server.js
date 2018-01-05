module.exports = function (mongoose, q) {

    var UserSchema = require('./user.schema.server')(mongoose);
    var UserModel = mongoose.model('UserModel', UserSchema);
    var bcrypt = require("bcrypt-nodejs");

    UserModel.createUser = createUser;
    UserModel.findUserByCredentials = findUserByCredentials;
    UserModel.findUserById = findUserById;
    UserModel.findUserByEmail = findUserByEmail;
    return UserModel;

    function findUserById(userId) {
        var deferred = q.defer();
        UserModel.findById(userId, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findUserByCredentials(username, password) {
        var deferred = q.defer();
        UserModel.findOne({username:username, password:password}, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function createUser(user) {
        var deferred = q.defer();
        UserModel.create(user, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findUserByEmail(username) {
        var deferred = q.defer();
        UserModel.findOne({username: username}, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else{
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

};