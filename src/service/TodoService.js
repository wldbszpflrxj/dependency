class TodoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getTodos() {
    // todo list array return
    // Promise로 감싸진 todo list array return
    return this.httpClient.fetch("todos");
  }

  create(todo) {
    return this.httpClient.fetch("todos", {
      body: JSON.stringify({ todo }),
    });
  }
}

export default TodoService;

// 추상은 같아야합니다.
// getTodos, create
