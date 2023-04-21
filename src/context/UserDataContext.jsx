import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const UserDataContext = createContext();
const UserDataProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState();

  const [appTitle, setAppTitle] = useState("");

  const abrirSesion = (user) => {
    setDataUser({
      name: user?.name,
      lastname: user?.lastname,
      idRol: user?.idRol,
      userPicture: user?.userPicture,
      idUser: user?.idUser,
      supervisorId: user?.supervisorId,
    });
    console.log(dataUser);
  };

  const cerrarSesion = () => {
    //setear data como null, se cierra
    localStorage.clear();
    setDataUser(null);
  };

  return (
    <UserDataContext.Provider
      value={{ appTitle, setAppTitle, dataUser, abrirSesion, cerrarSesion }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider };
export default UserDataContext;
