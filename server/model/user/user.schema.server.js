module.exports = function (mongoose) {

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String
    }, {collection: 'user'});

    return UserSchema;
};