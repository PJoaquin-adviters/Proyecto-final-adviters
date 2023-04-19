import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";
import "./AdministrarUsuariosPage.css";
import { Paper, Button } from "@mui/material";
import { Height } from "@mui/icons-material";
import Jordi from "../../assets/img/jordi2.jpg";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import NoUser from "../../assets/img/user-not-found.png";
import UserDataContext from "../../context/UserDataContext";

const AdministrarUsuariosPage = () => {
  const [userList, setUserList] = useState(null);
  const { dataUser } = useContext(UserDataContext);

  const getData = () => {
    const data = [
      {
        id: "646546135421",
        name: "Juan",
        lastName: "Rodriguez",
        role: "Supervisor",
        img: Jordi,
      },
      {
        id: "646854152454",
        name: "Marcos",
        lastName: "Aurelio",
        role: "Usuario",
        img: null,
      },
      {
        id: "646854152454",
        name: "Marcos",
        lastName: "Aurelio",
        role: "Usuario",
        img: null,
      },
    ];

    setUserList(data);
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const editUser = (userId) => {};

  const deleteUser = (userId) => {};

  return (
    <div className="admUsuariosContainer">
      {!userList ? (
        <Loading />
      ) : (
        <div className="admucontainer">
          <div className="admuHeader">
            <h2>Usuarios Habilitados</h2>
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                (window.location.href = "/user?title=CREAR USUARIO")
              }
            >
              Crear Usuario
            </Button>
          </div>
          <div className="admuBody">
            <div className="admulista">
              {userList.map((usuario, index) => (
                <>
                  <div className="admuItem">
                    <div className="fstart">
                      <img
                        className="simagen"
                        src={usuario.img ? usuario.img : NoUser}
                        alt=""
                      />
                      <h3 className="tittlename">{`${usuario.name} ${usuario.lastName}`}</h3>
                    </div>
                    <h3 className="cargo">{usuario.role}</h3>
                    <div className="admuItemButtons">
                      <button
                        className="buttonedit"
                        onClick={() => editUser(usuario.id)}
                      >
                        <EditIcon sx={{ color: "gray" }} />
                      </button>
                      <button
                        className="buttonDelete"
                        onClick={() => deleteUser(usuario.id)}
                      >
                        <DeleteIcon sx={{ color: "#ff7b7b" }} />
                      </button>
                    </div>
                  </div>
                  {index + 1 != userList.length && (
                    <hr style={{ marginRight: "5px", marginLeft: "5px" }} />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdministrarUsuariosPage;
