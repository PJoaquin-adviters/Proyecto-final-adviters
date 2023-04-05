import React, { useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Button, Box, Typography, Container, Grid } from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UserPage = () => {
  const [isNew, setIsNew] = useState(false);

  const data = {
    name: "joa",
    lastname: "par",
    date: "18/02/96",
    ciul: "339999999",
    admissionDate: "20/30/21",
    email: "joa@par",
    street: "calle joa",
    streetNumber: "123",
    postalCode: "1223",
    tower: "1",
    floor: "3",
    apartment: "12",
    location: "Capital",
    province: "Buenos aires",
    country: "Argentina",
    holiday: 12,
    idAdmin: false,
    supervisorId: 3

  }

  return (
    <section className="profile-page">
      <form className="form-user">
        <div>
          <Typography variant="h2" align="left">Mi Perfil</Typography>
        </div>
        <section className="input-section">
          <div className="input-column-container">
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
              defaultValue="3906645"
            />
            <TextField
              id="outlined-required"
              label="Email"
              type="email"
              defaultValue="fdfgfdg@df"
            />
          </div>
          <div className="input-column-container">
            <TextField
              id="outlined-required"
              label="Nombre"
              defaultValue="Pepe"
            />
            <TextField
              id="outlined-required"
              label="Apellido"
              defaultValue="Ful"
            />
            <TextField
              id="outlined-required"
              label="Fecha de nacimiento"
              type="date"

            />
            <TextField
              id="outlined-required"
              label="Cuil"
              defaultValue="1344555"
            />
            <TextField
              id="outlined-required"
              label="Telefono"
              defaultValue="1223344"
            />
          </div>
          <div className="input-column-container">
            <TextField
              id="outlined-required"
              label="Password"
              type="password"
              defaultValue="password"
            />
            <TextField
              id="outlined-required"
              label="Repeat password"
              type="password"
              defaultValue="password"
            />
            <TextField
              id="outlined-required"
              label="Fecha de ingreso"
              type="date"
            />

          </div>

        </section>
        <section className="input-section">
          <div className="input-column-container">
            <TextField
              id="outlined-required"
              label="Calle"
              defaultValue="Calle false"
            />
            <TextField
              id="outlined-required"
              label="Torre"
            />
            <TextField
              id="outlined-required"
              label="Localidad"
              defaultValue="Capital federal"
            />
            <TextField
              id="outlined-required"
              label="Codigo postal"
              defaultValue="03455"
            />
            <TextField
              id="outlined-required"
              label="Dias vacaciones"
              defaultValue="15"
            />

          </div>
          <div className="input-column-container">

            <TextField
              id="outlined-required"
              label="Altura"
              defaultValue="123"
            />
            <TextField
              id="outlined-required"
              label="Piso"
              defaultValue="1"
            />
            <TextField
              id="outlined-required"
              label="Provincia"
              defaultValue="Buenos Aires"
            />
          </div>
          <div className="input-column-container">
            <TextField
              id="outlined-required"
              label="Codigo postal"
              defaultValue="345345"
            />
            <TextField
              id="outlined-required"
              label="Departamento"
              defaultValue="2A"
            />
            <TextField
              id="outlined-required"
              label="Pais"

              defaultValue="Argentina"
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
