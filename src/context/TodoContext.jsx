import {
  useEffect,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

const TodoContext = createContext(null);

export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ todoService, children }) {
  const [todos, setTodos] = useState([]);

  const getTodos = useCallback(() => {
    todoService.getTodos().then(setTodos);
  }, [todoService]);

  useEffect(getTodos, [getTodos]);

  const create = async (todo) => {
    const newTodo = await todoService.create(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  const value = {
    todos,
    create,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
