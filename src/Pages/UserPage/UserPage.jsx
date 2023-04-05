import React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Button, Box } from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UserPage = () => {
  return (
    <section className="profile-page">
      <form className="form-user">
        <div>
          <h1>Mi perfil</h1>
        </div>
        <section className="user-input-container">
          {/* Datos personales */}
          <div className="user-input-container-column">
            <img src={pictureNotFound} className="profile-picture" alt="" />

            <Select
              placeholder="Bajo supervisión de: "
              indicator={<KeyboardArrowDown />}
              sx={{
                width: 240,
                [`& .${selectClasses.indicator}`]: {
                  transition: "0.2s",
                  [`&.${selectClasses.expanded}`]: {
                    transform: "rotate(-180deg)",
                  },
                },
              }}
            >
              <Option value="dog">Pepito</Option>
              <Option value="cat">Marcus</Option>
              <Option value="fish">Marge</Option>
            </Select>

            <TextField
              id="outlined-required"
              label="DNI"
              defaultValue="23434545"
            />

            <TextField
              id="outlined-required"
              label="Correo electronico"
              defaultValue="usu@gmail"
            />
            <TextField
              id="outlined-required"
              label="Nombre"
              defaultValue="Pepito"
            />
            <TextField
              id="outlined-required"
              label="Apellido"
              defaultValue="Urch"
            />
            <TextField
              id="outlined-required"
              label="DNI"
              type="date"
              defaultValue="23434545"
            />
            <TextField
              id="outlined-required"
              label="Cuil"
              defaultValue="1112222333"
            />
            <TextField
              id="outlined-required"
              label="Telefono"
              defaultValue="23434545"
            />
          </div>
          {/* Datos personales de residencia */}
          <div className="user-input-container-column">
            <TextField
              id="outlined-required"
              label="Calle"
              defaultValue="Calle false"
            />
            <TextField
              id="outlined-required"
              label="Altura"
              defaultValue="23434545"
            />
            <TextField
              id="outlined-required"
              label="Codigo Postal"
              defaultValue="23434545"
            />
            <TextField id="outlined-required" label="Torre" defaultValue="" />
            <TextField
              id="outlined-required"
              label="Piso"
              defaultValue="23434545"
            />
            <TextField
              id="outlined-required"
              label="Departamento"
              defaultValue="23434545"
            />
            <TextField
              id="outlined-required"
              label="Localidad"
              defaultValue="Capital Federal"
            />
            <TextField
              id="outlined-required"
              label="Provincia"
              defaultValue="Capital Federal"
            />
            <TextField
              id="outlined-required"
              label="Pais"
              defaultValue="Capital Federal"
            />
          </div>
        </section>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            paddingRight: "30px",
          }}
        >
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            Guardar
          </Button>
        </Box>
      </form>
    </section>
  );
};

export default UserPage;
