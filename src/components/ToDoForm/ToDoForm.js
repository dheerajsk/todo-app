import { useState } from "react";

function ToDoForm() {
  const [todo, setTodo] = useState("");

  function handleCreate() {
    console.log(todo);
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
