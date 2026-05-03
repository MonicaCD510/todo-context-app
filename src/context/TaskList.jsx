import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TaskList() {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <h2>Task List</h2>
    </div>
  );
}

export default TaskList;