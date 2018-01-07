(function () {
    angular
        .module("LearningApp")
        .factory("TodoService", todoService)

    function todoService($http) {

        var api = {
            addTask: addTask,
            findAllTasks : findAllTasks,
            deleteTask : deleteTask
        }
        return api;

        function addTask(userId, task) {
            return $http.post("/api/user/addTask/"+userId, task);
        }

        function findAllTasks(userId) {
            return $http.get("/api/user/getTasks/"+userId);
        }

        function deleteTask(taskId) {
            return $http.delete("/api/user/deleteTask/"+taskId);
        }

    }

})();