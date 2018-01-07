module.exports = function (app, taskModel) {
    app.post("/api/user/addTask/:userId", addTask);
    app.get("/api/user/getTasks/:userId", findAllTasks);
    app.delete("/api/user/deleteTask/:taskId", deleteTask);

    function addTask(req, res) {
        var task = req.body;
        var userId = req.params.userId;
        taskModel
            .createTask(userId, task)
            .then(function (task) {
                res.json(task);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function findAllTasks(req, res) {
        var userId = req.params.userId;
        taskModel
            .findAllTasks(userId)
            .then(function (tasks) {
                res.json(tasks);
            }, function (err) {
                res.sendStatus(500).send(err);
            })
    }

    function deleteTask(req, res) {
        var taskId = req.params.taskId;
        taskModel
            .deleteTask(taskId)
            .then(function (status) {
                res.sendStatus(200);
            }, function (err) {
                res.sendStatus(500).send(err);
            });
    }
}