import React from "react";

const Delete = (props) => {
  const { id, handleNewTask1 } = props;

  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };
  const handleDelete = () => {
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, requestOptions)
      .then((response) => response.text())
      .then(() => {
        handleNewTask1();
      })
      .catch((error) => console.error(error));
  };
  return (
    <button type="button" class="btn btn-outline-light">
      <h1>
        <i onClick={handleDelete} className="bi bi-x-lg"></i>
      </h1>
    </button>
  );
};

export default Delete;
