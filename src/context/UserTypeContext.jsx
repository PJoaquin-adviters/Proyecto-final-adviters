import { createContext, useState } from "react";

const UserTypeContext = createContext();

const UserTypeProvider = ({ children }) => {
    //0 = supervisor
    //1 = usuario
  const [idRol, setIdRol] = useState(0);

  return (
    <UserTypeContext.Provider value={{ idRol, setIdRol }}>
      {children}
    </UserTypeContext.Provider>
  );
};

export {UserTypeProvider};
export default UserTypeContext;
