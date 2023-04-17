import React, { useState } from "react";

const userContext = React.createContext();
const UserContext = ({children}) => {

    const [idRol, setIdRol] = useState(0);

    return (
    <userContext.Provider value={idRol}>
    {children}
    </userContext.Provider>
    )
    
}

export default UserContext;
