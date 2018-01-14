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
        vm.closeTask = closeTask;
        vm.updateFavourite = updateFavourite;
        vm.deleteTaskModel = deleteTaskModel;

        function init() {//Why undefined //check with alert
            vm.tasks = undefined;
            vm.allTasks = undefined;
            loadAllUserTasks();
        }
        init();

        function updateFavourite(task) {
            TodoService
                .updateFavourite(task)
                .then(function (restask) {
                    var index = vm.tasks.indexOf(task);
                    vm.tasks[index].favourite = restask.data.favourite;
                });
        }

        function closeTask(task) {
            TodoService
                .closedTask(task._id)
                .then(function (restask) {
                    var index = vm.tasks.indexOf(task);
                    console.log("close index "+index);
                    vm.tasks.splice(index, 1);
                });
        }

        function deleteTaskModel(task) {
            vm.delTask = task;
            $('#myModal').modal('show');
        }
        
        function deleteTask(task) {
            TodoService
                .deleteTask(task._id)
                .then(function (status) {
                    var index = vm.tasks.indexOf(task);
                    vm.tasks.splice(index, 1);
                    $('#myModal').modal('hide');
                });

        }

        function loadAllUserTasks() {
            TodoService
                .findAllTasks(vm.hostID)
                .then(function (tasks) {
                    var tasks = tasks.data;
                    var pendingTasks = [];
                    for (i = 0; i<tasks.length; i++ ){
                        tasks[i].dueDate = formatDate(tasks[i].dueDate);
                        if(!tasks[i].checked){
                            pendingTasks.push(tasks[i]);
                        }
                    }
                    vm.allTasks = tasks;
                    vm.tasks = pendingTasks;
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