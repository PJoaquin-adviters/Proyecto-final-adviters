import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { Box, Button, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import waves from "../../assets/img/waves.png";
import logoAdivters from "../../assets/img/logo-adviters.png";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../context/LoginContext";

const LoginPage = () => {
  const [userAuth, setUserAuth] = useState("");
  const [passwordAuth, setPasswordAuth] = useState("");

  const navigate = useNavigate();
  const { abrirSesion } = useContext(LoginContext);

  const handleClick = (e) => {
    e.preventDefault();
    abrirSesion(true);
    navigate("/grupos");
  };

  return (
    <>
      <section className="center-page">

        <div className="login-section">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                width: "100%"
              },
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px",
            }}
            noValidate
            autoComplete="off"
          >
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
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Iniciar
              </Button>
            </Box>
          </Box>
        </div>
        <img src={logoAdivters} className="logo-img" alt="" />
        <img className="waves" src={waves} alt="" />
      </section>
    </>
  );
};

export default LoginPage;
