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
import foto from "../../assets/img/fotoPerfil.jpg";
import LoginService from "../../services/LoginService";

const LoginPage = () => {
  const { dataUser, abrirSesion, setDataUser, cerrarSesion } =
    useContext(UserDataContext);
  const [userAuth, setUserAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const { headers } = await LoginService.auth(userAuth, passwordAuth);
      const token = headers.get("Authorization");

      localStorage.setItem("Authorization", token);

      const user = {
        name: headers.get("name"),
        lastname: headers.get("lastname"),
        idRol: headers.get("roleId"),
        userPicture: headers.get("profilePicture"),
      };

      abrirSesion(user);
      navigate("/");
    } catch (e) {
      const status = e.response?.status;
      if (status == 401) return setError("Usuario y/o contraseña incorrectos.");
      setError("Ocurrió un error. Intente nuevamente.");
    }
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
              gap: "20px",
              backgroundColor: "whitesmoke",
              padding: "30px",
              borderRadius: "10px",
              marginRight: "1em",
              marginLeft: "1em",
              width: "300px",
              height: "400px",
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
              onChange={(e) => {
                setUserAuth(e.target.value);
              }}
              error={error && true}
              helperText={error}
            />
            <TextField
              id="outlined-required"
              label="Password"
              type="password"
              onChange={(e) => {
                setPasswordAuth(e.target.value);
              }}
              error={error && true}
              helperText={error}
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
