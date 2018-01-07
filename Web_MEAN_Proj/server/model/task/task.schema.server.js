module.exports = function (mongoose) {

    var TaskSchema = mongoose.Schema({
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
        title: String,
        dueDate: Date,
        dateCreated: { type: Date, default: Date.now }
    }, {collection: 'task'});

    return TaskSchema;
};