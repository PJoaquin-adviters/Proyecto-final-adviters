import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import waves from "../../assets/img/waves.png";
import { useNavigate } from "react-router-dom";
import fondo1 from "../../assets/img/fondo1.jpg";
import logoAdviters from "../../assets/img/adviterslogo.png";
import UserDataContext from "../../context/UserDataContext";
import { getUsers } from "../../services/UsersService";
import foto from "../../assets/img/fotoPerfil.jpg"

const LoginPage = () => {
  const {dataUser, abrirSesion, setDataUser, cerrarSesion } = useContext(UserDataContext);
  const [userAuth, setUserAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    //aca pedimos el user según el mail + contraseña y lo mandamos
    const user = {
      name : "iara",
      lastname : "pou", 
      idRol: 1,
      userPicture: foto
    }

    abrirSesion(user);
    navigate("/");


  };

  return (
    <>
      <section className="login-center-page">
        <div className="login-section">
          <div className="logoAdviters2">
            <img className="login-logo2" src={logoAdviters} alt="" />
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: "white",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Adviters
            </Typography>
          </div>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                width: "100%",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "40px",
              backgroundColor: "whitesmoke",
              padding: "30px",
              borderRadius: "10px",
              marginRight: "1em",
              marginLeft: "1em",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" component="h4">
              ¡Bienvenido!
            </Typography>
            <TextField
              id="outlined-required"
              label="Usuario"
              defaultValue="User"
              onChange={(e) => {
                setUserAuth(e.target.value);
              }}
            />
            <TextField
              id="outlined-required"
              label="Password"
              type="password"
              defaultValue="password"
              onChange={(e) => {
                setPasswordAuth(e.target.value);
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  minWidth: "15vw",
                }}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Iniciar
              </Button>
            </Box>
          </Box>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
