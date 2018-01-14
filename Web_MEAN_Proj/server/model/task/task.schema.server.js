module.exports = function (mongoose) {

    var TaskSchema = mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
        title: String,
        dueDate: Date,
        dateCreated: { type: Date, default: Date.now },
        checked : { type: Boolean, default: false},
        favourite : { type: Boolean, default: false}
    }, {collection: 'task'});

    return TaskSchema;
};