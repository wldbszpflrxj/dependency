class LocalTodoService {
  constructor() {
    this.todos = [];
    this.id = 1;
  }

  getTodos() {
    return Promise.resolve(this.todos);
  }

  create(todo) {
    const newTodo = {
      id: this.id++,
      todo: todo,
      isComplete: false,
    };

    return Promise.resolve(newTodo);
  }
}

export default LocalTodoService;
