import React, { useState } from "react";

const PostNewTask = ({ onNewTask }) => {
  const [newtask, setNewTask] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && newtask !== "") {
      crearTarea();
      setNewTask("");
    }
  };

  function crearTarea() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      label: newtask,
      is_done: false,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://playground.4geeks.com/todo/todos/iker", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        onNewTask();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <li className="list-group-item opacity-50">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="What needs to be done?"
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </li>
    </div>
  );
};

export default PostNewTask;
