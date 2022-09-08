import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function Todos() {
  const { todos, create } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const createTodo = async () => {
    await create(newTodo);
    setNewTodo("");
  };

  return (
    <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={createTodo}>create</button>
      {todos.map(({ id, todo }) => (
        <li key={id}>{todo}</li>
      ))}
    </div>
  );
}

export default Todos;
