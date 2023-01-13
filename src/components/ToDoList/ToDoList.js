
import {useSelector} from "react-redux";
import "./ToDoList.css";
import { todoSelector } from "../../todoReducer";

function ToDoList() {
  // get the data from the store.
  const values = useSelector(todoSelector)

  return (
    <div>
      <h4>ToDo List</h4>
      <ol>
        {values.map((t) => (
          <li>{t}</li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
