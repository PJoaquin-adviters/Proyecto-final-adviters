import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// css
import "./Header.css";

const Header = () => {
  const avatar = (
    <Avatar>
      <AccountCircleIcon />
    </Avatar>
  );

  const getTitle = () => {
    const query = new URLSearchParams(window.location.search)
    return query.get("title");

  }

  const itemListHam = [
    {
      icono: <BarChartIcon color="primary" />,
      text: "Dashboard",
      path: '/'
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar Licencias",
      path: '/cargarLicencia'
    },
    {
      icono: <GroupsRoundedIcon color="error" />,
      text: "Administrar Usuarios",
      path: '/administrarUsuarios'
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Mantenimiento de Calendario",
      path: '/calendar'
    },
  ];
  const notificationList = [
    {
      icono: <BarChartIcon />,
      text: "Dashboard",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar licencias",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Administrar usuarios",
    },
  ];

  const userList = [
    {
      icono: <BarChartIcon />,
      text: "Dashboard",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Cargar licencias",
    },
    {
      icono: <CalendarTodayRoundedIcon />,
      text: "Administrar usuarios",
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
          <h2 style={{ width: '100%', textAlign: 'center' }}>{getTitle()}</h2>
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

{
  /* 
<MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <BarChartIcon /> Dashboard
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <CalendarTodayRoundedIcon /> Cargar licencias
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <GroupsRoundedIcon />
          Administrar usuarios
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <CalendarTodayRoundedIcon />
          Mantenimiento y calendario
        </MenuItem>

*/
}
