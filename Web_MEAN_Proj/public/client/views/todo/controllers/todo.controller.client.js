(function () {
    angular
        .module("LearningApp")
        .controller("TodoController",todoController);

    function todoController($routeParams, UserService, $location, TodoService) {
        var vm = this;
        vm.hostID = $routeParams['hid'];
        vm.logout = logout;
        vm.addTask = addTask;
        vm.deleteTask = deleteTask;

        function init() {//Why undefined //check with alert
            vm.tasks = undefined;
            loadAllUserTasks();
        }
        init();
        
        function deleteTask(task) {
            TodoService
                .deleteTask(task._id)
                .then(function (status) {
                    var index = vm.tasks.indexOf(task);
                    vm.tasks.splice(index, 1);
                });
        }

        function loadAllUserTasks() {
            TodoService
                .findAllTasks(vm.hostID)
                .then(function (tasks) {
                    var tasks = tasks.data;
                    for (i = 0; i<tasks.length; i++ ){
                        tasks[i].dueDate = formatDate(tasks[i].dueDate);
                    }
                    vm.tasks = tasks;
                });
        }
        
        function formatDate(dueDate) {
            var d = new Date(dueDate);
            return d.getDate()+"/"+d.getMonth()+1+"/"+d.getFullYear();
        }

        function addTask(task) {
            if(task && task.title){
                TodoService
                    .addTask(vm.hostID, vm.task)
                    .then(function (status) {
                        $('#addTask').modal('hide');
                        init();
                    });
            }
        }

        function logout() {
            UserService
                .logout()
                .then(function (response) {
                    $location.url("/login");
                });
        }
    }
})();