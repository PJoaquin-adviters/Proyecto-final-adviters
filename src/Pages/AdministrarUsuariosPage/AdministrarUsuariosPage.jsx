import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import "./AdministrarUsuariosPage.css";

const AdministrarUsuariosPage = () => {
  const [userList, setUserList] = useState(null);

  const getData = () => {
    const data = [
      {
        id: "646546135421",
        name: "Juan",
        lastName: "Rodriguez",
        role: "Supervisor",
        img: "linkdelaimagen",
      },
      {
        id: "646854152454",
        name: "Marcos",
        lastName: "Aurelio",
        role: "Usuario",
        img: null,
      },
    ];

    setTimeout(() => {
      setUserList(data);
    }, 1500);
  };

  useEffect(() => getData(), []);

  return (
    <div style={Styles.container}>
      {!userList ? (
        <Loading />
      ) : (
        <div>
          <h1>LISTA DE USUARIOS </h1>
        </div>
      )}
    </div>
  );
};

export default AdministrarUsuariosPage;
