import React, { useEffect, useState } from "react";

const Update = ({ id }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "label": "wawiku",
      "is_done": false
    });

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`https://playground.4geeks.com/todo/todos/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

  return (
    <i onClick={() => console.log("editando")} className="bi bi-asterisk"></i>
  );
};

export default Update;
