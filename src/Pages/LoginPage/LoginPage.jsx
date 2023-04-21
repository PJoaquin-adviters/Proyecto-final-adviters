import React, { useContext, useState } from "react";
import "./LoginPage.css";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import logoAdviters from "../../assets/img/adviterslogo.png";
import UserDataContext from "../../context/UserDataContext";
import LoginService from "../../services/LoginService";

const LoginPage = () => {
  const { abrirSesion } = useContext(UserDataContext);
  const [userAuth, setUserAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const { headers } = await LoginService.auth(userAuth, passwordAuth);
      const token = headers.get("Authorization");

      console.log(headers);

      localStorage.setItem("Authorization", token);
      localStorage.setItem("name", headers.get("name"));
      localStorage.setItem("lastname", headers.get("lastname"));
      localStorage.setItem("roleId", headers.get("roleId"));
      localStorage.setItem("profilePicture", headers.get("profilePicture"));
      localStorage.setItem("idUser", headers.get("idUser"));
      localStorage.setItem("supervisorId", headers.get("supervisorId"));

      const user = {
        name: headers.get("name"),
        lastname: headers.get("lastname"),
        idRol: headers.get("roleId"),
        userPicture: headers.get("profilePicture"),
        idUser: headers.get("idUser"),
        supervisorId: headers.get("supervisorId"),
      };

      abrirSesion(user);
      navigate("/");
    } catch (e) {
      setLoading(false);
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
            <form
              style={{
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
            >
              <TextField
                id="outlined-required"
                label="Usuario"
                onChange={(e) => {
                  setUserAuth(e.target.value);
                }}
              />
              <TextField
                id="outlined-required"
                label="Password"
                type="password"
                onChange={(e) => {
                  setPasswordAuth(e.target.value);
                }}
              />

              <p style={{ color: "red", fontSize: "12px" }}>{error}</p>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                }}
              >
                <>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      type="submit"
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
                  )}
                </>
              </Box>
            </form>
          </Box>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
