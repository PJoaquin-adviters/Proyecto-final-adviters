import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserDataContext from "../../context/UserDataContext";
import CloseIcon from "@mui/icons-material/Close";
import TaskIcon from "@mui/icons-material/Task";

// css
import "./Header.css";

const Header = () => {
  const { dataUser, cerrarSesion, appTitle } = useContext(UserDataContext);
  const idRol = dataUser?.idRol;

  const avatar = (
    <Avatar>
      {`${dataUser.name?.substring(0, 1).toUpperCase()}${dataUser.lastname
        ?.substring(0, 1)
        .toUpperCase()}`}
    </Avatar>
  );

  const itemListHam = [
    {
      icono: <BarChartIcon color="primary" />,
      text: "Dashboard",
      path: "/",
    },
    {
      icono: <TaskIcon />,
      text: idRol == 0 ? "Cargar Licencias" : "Solicitar Licencia",
      path: "/cargarLicencia",
    },
    idRol == 0 && {
      icono: <GroupsRoundedIcon color="error" />,
      text: "Administrar Usuarios",
      path: "/administrarUsuarios",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      // si es supervisor, muestra mantenimiento. Sino, calendario
      text: idRol == 0 ? "Mantenimiento de Calendario" : "Calendario",
      path: "/calendar",
    },
  ];
  const notificationList = [
    {
      text: "No hay notificaciones!",
    },
  ];

  const userList = [
    {
      icono: <AccountCircleIcon />,
      text: "Editar mi perfil",
      // La idea es que lleve a userPage con edicion de perfil, tipo, que agarre solo al campo del usuario en la base y modifique eso
      path: "/user",
    },
    {
      icono: <CloseIcon />,
      text: "Cerrar sesión",
      onclick: cerrarSesion,
      path: "/login",
    },
  ];

  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar sx={{ backgroundColor: "white" }}>
          <DropDownMenu
            name="ham"
            botonIcono={<MenuIcon />}
            listItems={itemListHam}
          />
          <h2 style={{ width: "100%", textAlign: "center" }}>{appTitle}</h2>
          <nav className="nav-header">
            <DropDownMenu
              name="notification"
              botonIcono={<NotificationsIcon />}
              listItems={notificationList}
            />
            <DropDownMenu
              name="user"
              botonIcono={avatar}
              listItems={userList}
            />
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
