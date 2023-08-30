/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(listOfTodos) {
    this.listOfTodos = listOfTodos || [];
  }

  get (indexOfTodo) {
    if(!this.listOfTodos?.[indexOfTodo]) return null;
    return this.listOfTodos?.[indexOfTodo];
  }
  add (todo) {
    this.listOfTodos.push(todo);
  }
  remove (indexOfTodo) {
    this.listOfTodos.splice(indexOfTodo, 1);
  }
  update (index, updatedTodo) {

    if(index >= this.listOfTodos.length) return this.listOfTodos;

    this.listOfTodos[index] = updatedTodo;

    return this.listOfTodos;
  }
  getAll () {
    return this.listOfTodos;
  }
  clear () {
    this.listOfTodos = [];
  }
}

module.exports = Todo;
