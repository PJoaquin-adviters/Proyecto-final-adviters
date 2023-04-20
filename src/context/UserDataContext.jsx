import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const UserDataContext = createContext();
const UserDataProvider = ({ children }) => {
  const innitData = {
    name: "admin",
    lastname: "admin",
    idRol: /*null*/ 0,
    userPicture: "asd",
    idUser: "2c8cb2bb878f6d2901878f6dbfe20000",
    supervisorId: "2c8cb2bb878f6d2901878f6dbfe20000",
  };

  const [dataUser, setDataUser] = useState(innitData);

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
  };

  const cerrarSesion = () => {
    //setear data como null, se cierra
    localStorage.removeItem("Authorization");
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
