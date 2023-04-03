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

  const itemListHam = [
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
        <Toolbar>
          <DropDownMenu
            name="ham"
            botonIcono={<MenuIcon />}
            listItems={itemListHam}
          />
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
