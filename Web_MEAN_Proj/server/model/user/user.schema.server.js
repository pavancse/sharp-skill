module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String
    }, {collection: 'firstMeanProjDB.user'});

    return UserSchema;
};