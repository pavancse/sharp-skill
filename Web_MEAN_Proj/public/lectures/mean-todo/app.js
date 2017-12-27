angular
    .module("TodoApp", [])
    .controller("TodoController", TodoController);

function TodoController($scope, $http) {
    $scope.todoList = [];

    $http.get('/lectures/todo').then(function (response) {
           $scope.todoList = response.data;
        }, function (error) {
        console.log(error);
    });

    $scope.createTodo = createTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.selectTodo = selectTodo;
    $scope.selectedIndex = -1;
    $scope.updateTodo = updateTodo;

    function createTodo(todo) {
        var newTodo = {
            title: todo.title,
            content: todo.content
        };
        $scope.todoList.push(newTodo);
        $scope.todo = {};
    }
    function deleteTodo(todo) {
        console.log(todo);
        var index = $scope.todoList.indexOf(todo);
        $scope.todoList.splice(index, 1);
    }
    function selectTodo(todo) {
        $scope.selectedIndex = $scope.todoList.indexOf(todo);
        $scope.todo = {};
        $scope.todo.title = todo.title;
        $scope.todo.content = todo.content;
    }
    function updateTodo(todo) {
        $scope.todoList[$scope.selectedIndex].title = todo.title;
        $scope.todoList[$scope.selectedIndex].content = todo.content;
        $scope.todo = {};
        $scope.selectedIndex = -1;
    }
}




