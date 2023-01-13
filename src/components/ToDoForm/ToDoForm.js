import { useState } from "react";
import {useDispatch} from "react-redux";
import {add} from "../../todoReducer";

function ToDoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  function handleCreate() {
    console.log(todo);
    dispatch(add(todo));
  }

  return (
    <div className="container">
      <h4>Create new To Do</h4>
      <input
        onInput={(e) => {
          setTodo(e.target.value);
        }}
        className="form-control mb-3"
        type="text"
        value={todo}
      />{" "}
      <button className="btn btn-primary float-end" onClick={handleCreate}>
        Save
      </button>
    </div>
  );
}

export default ToDoForm;
