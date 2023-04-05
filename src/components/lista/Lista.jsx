import React from "react";
import "./lista.css";
import ListItem from "../ListItem/ListItem";

const Lista = ({ titulo, data, displayIconos }) => {
  return (
    <div className="flexListItem">
      <div className="flexItem">
        <h1 className="titulo">{titulo}</h1>
      </div>
      {data.map((el, index) => (
        <ListItem data={el} key={index} displayIconos={displayIconos} />
      ))}
    </div>
  );
};

export default Lista;
