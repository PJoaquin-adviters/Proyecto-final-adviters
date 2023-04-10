import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

const CustomizedMenus = ({ name, botonIcono, listItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const redirect = (path, title) => {
    window.location.href = `${path}?title=${title.toUpperCase()}`
  }

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
            {el.icono} {el.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomizedMenus;
