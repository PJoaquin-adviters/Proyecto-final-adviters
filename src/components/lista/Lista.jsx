import React from "react";
import "./lista.css";

const Lista = ({ titulo, children}) => {
  return (
    <div className="l-flexListItem">
      <div className="l-flexItem">
        <h1 className="l-titulo">{titulo}</h1>
      </div>
      {children}
    </div>
  );
};

export default Lista;
