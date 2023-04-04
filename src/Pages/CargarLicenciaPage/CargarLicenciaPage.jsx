import React from "react";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import scaloni from "./scaloni.jpg";
import "./CargarLicenciaStyle.css";

const CargarLicenciaPage = () => {
  return (
    <>
      <main>
        <div>
          <div>CargarLicenciaPage</div>
        </div>
        <div id="responsable-licencias-contenedor">
          <p>Aprobación a cargo de:</p>
          <span id="contenedor-scaloni">
            <Avatar alt="scaloni" src={scaloni} />
            <p>LIONEL SCALONI</p>
          </span>
          <Button variant="contained" id="boton-licencia">
            SOLICITAR APROBACION
          </Button>
        </div>
      </main>
      <aside>
        
      </aside>
    </>
  );
};

export default CargarLicenciaPage;
