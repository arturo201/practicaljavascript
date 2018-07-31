<!DOCTYPE html>
<html>

  <head>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <h1>Todo List</h1>
    
    <div>
    <button onClick="handlers.toggleAll()">Toggle All</button>
    </div>
    
    <div>
    <button onClick="handlers.addTodo()">Add</button>
    <input id="addTodoTextInput" type="text">
    </div>
    
    <div>
      <button onClick="handlers.changeTodo()">Change Todo</button>
      <input id="changeTodoPositionInput" type="number">
      <input id="changeTodoTextInput" type="text">
    </div>
    
    <div>
      <button onClick="handlers.deleteTodo()">Delete</button>
      <input id="deleteTodoPositionInput" type="number">
    </div>
    
    <div>
      <button onClick="handlers.toggleCompleted()">Toggle completed</button>
      <input id="toggleCompletedPositionInput" type="number">
    </div>
    
    <ul>
    </ul>
    
  <script src="script.js"></script>
  </body>

</html>







var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodotextInput = document.getElementById('changeTodoTextInout');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changetodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput - document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
   toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
   var todosUl = document.querySelector('ul');
   todosUl.innerHTML = '';
  for (var i = 0, i < todoList.todos.length; i++) {
    var todoLi = document.createElement('li');
    var todo = todoList.todos[i];
    var todoTextWithCompletion = '';
    
    if (todo.completed === true) {
      todoTextWithCompletion = '(x) ' + todo.todoText;  
      } else {
      todoTextWithCompletion = '( ) ' + todo.todoText; 
    }
    
    todoLi.textContent = todoTextWithCompletion;
    todosUl.appendChild(todoLi);
    }
  }  
};