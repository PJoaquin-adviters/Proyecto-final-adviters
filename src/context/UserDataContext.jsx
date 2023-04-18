import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const UserDataContext = createContext();
const UserDataProvider = ({ children }) => {
  const innitData = {
    name: "",
    lastname: "",
    idRol: null,
    userPicture: "",
  };

  const [dataUser, setDataUser] = useState(innitData);

  const abrirSesion = (user) => {
    //setear la data con la base
    //id = 0 supervisor, 1 es user
    // axios.post()
    setDataUser({
      name: user.name,
      lastname: user.lastname,
      idRol: user.idRol,
      userPicture: user.userPicture,
    });

  };

  const cerrarSesion = () => {
    //setear data como null, se cierra
    setDataUser(null);
  };

    return (
      <UserDataContext.Provider value={{ dataUser, abrirSesion, cerrarSesion }}>
        {children}
      </UserDataContext.Provider>
    );
  
};

export { UserDataProvider };
export default UserDataContext;
