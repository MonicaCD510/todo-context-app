import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TaskList() {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <div>
      <h2>Task List</h2>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;