import React, { useState, useEffect } from "react";
import Delete from "./delete.jsx";

const GetTodolist = (props) => {
  const { id, iden, handleNewTask1 } = props;
  return (
    <div className="container">
      <div className="text-start mt-5">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <h1> {props.tarea}</h1>
                <p>{props.estado}</p>
              </div>
              <div className="col-2 d-flex justify-content-end">
                <Delete id={iden} handleNewTask1={handleNewTask1} />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTodolist;
