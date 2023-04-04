import React from "react";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import scaloni from "./scaloni.jpg"
import "./CargarLicenciaStyle.css"

const CargarLicenciaPage = () => {
  return (
    <>
      <div></div>
      <div>
        <span id="contenedor-scaloni">
            <Avatar alt="scaloni" src={scaloni} />
            <p>LIONEL SCALONI</p>
        </span>
        <div>CargarLicenciaPage</div>
        <Button variant="contained">holi</Button>
      </div>
    </>
  );
};

export default CargarLicenciaPage;
