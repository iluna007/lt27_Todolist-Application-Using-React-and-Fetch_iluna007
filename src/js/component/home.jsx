import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import GetTodolist from "./gettodolist.jsx";
import PostNewTask from "./posttodo.jsx";

//create your first component

const Home = () => {

  const [list, setList] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    console.log("Obteniendo lista de usuarios");
    fetch("https://playground.4geeks.com/todo/users/iker")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.todos);
        setList(data.todos);
      });
  }, [!trigger]);

  const handleNewTask1 = () => {
    setTrigger(!trigger);
  };

  return (
    <div className="text-center">
      <h1>Todo List </h1>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <PostNewTask onNewTask={handleNewTask1} />
          </li>
          {list.map((item) => (
            <li className="list-group-item">
              <GetTodolist
                key={item.id}
                tarea={item.label}
                iden={item.id}
                handleNewTask1={handleNewTask1}
              />
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-start">
            <p className="fw-light text-body-secondary">
              {" "}
              {list.length} items left
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
