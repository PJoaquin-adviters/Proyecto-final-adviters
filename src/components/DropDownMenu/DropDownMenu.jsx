import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import "./DropDownMenuStyle.css";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../../context/UserDataContext";

const CustomizedMenus = ({ name, botonIcono, listItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const redirect = (path, title) => {
    title != "Editar mi perfil"
      ? navigate(path)
      : navigate(`${path}?function=2`);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {botonIcono}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {listItems.map((el, index) => (
          <MenuItem
            key={`${name}-${index}`}
            onClick={() => redirect(el.path, el.text)}
            sx={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link to={el.path}>
              {el.icono} {el.text}
            </Link>
            {/* poner link, link to.  */}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomizedMenus;
