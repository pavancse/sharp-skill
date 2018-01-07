module.exports = function (mongoose, q) {

    var TaskSchema = require('./task.schema.server')(mongoose);
    var TaskModel = mongoose.model('TaskModel', TaskSchema);

    TaskModel.createTask = createTask;
    TaskModel.findAllTasks = findAllTasks;
    TaskModel.deleteTask = deleteTask;
    return TaskModel;

    function deleteTask(taskId) {
        var deferred = q.defer();

        TaskModel.findByIdAndRemove(taskId, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findAllTasks(userId) {
        var deferred = q.defer();

        TaskModel.find({user: userId}, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function createTask(userId, task) {
        var deferred = q.defer();
        task.user = userId;

        TaskModel.create(task, function (err, doc) {
            if(err){
                deferred.reject(err);
            }
            else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

};