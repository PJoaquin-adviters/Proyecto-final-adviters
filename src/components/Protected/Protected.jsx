import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataContext";

function Protected({ children }) {
  const { dataUser } = useContext(UserDataContext);

  if (/*!dataUser.idRol*/ false) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default Protected;
