import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TaskList() {
  const { todos } = useContext(TodoContext);

return (
  <div>
    <h2>Task List</h2>

    {todos.map((todo) => (
      <div key={todo.id}>
        {todo.text}
      </div>
    ))}

  </div>
); 
}


export default TaskList;