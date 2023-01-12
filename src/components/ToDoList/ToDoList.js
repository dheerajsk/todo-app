import { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [todos, setToDos] = useState(["Call the Client", "Attend Meeting"]);

  return (
    <div>
      <h4>ToDo List</h4>
      <ol>
        {todos.map((t) => (
          <li>{t}</li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
