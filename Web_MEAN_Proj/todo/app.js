module.exports = function (app) {
    app.get('/lectures/todo', readAllTodos);

    var todos = [
        {title: 'milk', content: 'Organic milk'}
    ];
    
    function readAllTodos(req, res) {
        res.json(todos);
    }

};