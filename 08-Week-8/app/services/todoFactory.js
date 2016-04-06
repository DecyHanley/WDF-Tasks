(function() {
    var todoFactory = function($http) {
        var todoIDCounter = 3;
        var todos = [
          {
            id: 1,
            name: "Get the Milk",
            dueDate: new Date()
          },{
            id: 2,
            name: "Get the Bread",
            dueDate: new Date()
          }
        ];
        var factory = {};

        factory.getAppName = function() {
          return {name: "ToDo App"};
        }

        factory.getToDos = function() {
          return todos;
        }

        factory.addToDo = function(aTodo) {
          aTodo.id = todoIDCounter++;
          todos.push(aTodo);
          return todos;
        }

        return factory;
    };

    todoFactory.$inject = ['$http'];

    angular.module('todoApp').factory('todoFactory', todoFactory);

}());
