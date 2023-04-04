import React from "react";
import Button from "@mui/material/Button";
import { Avatar, Badge, Select, MenuItem, InputLabel, ButtonGroup } from "@mui/material";
import scaloni from "./scaloni.jpg";
import "./CargarLicenciaStyle.css";
import { FormatAlignJustify } from "@mui/icons-material";

const CargarLicenciaPage = () => {
  return (
    <>
      <main id="contenedor">
        <section id="titulo">
          <div>
            <Avatar alt="scaloni" src={scaloni} />
            <p>Ricky</p>
          </div>
          <div>
            <p>
              Balance actual: <b>24 días</b>
            </p>
          </div>
          <div>
            <p>ESTADO</p>
            <Badge badgeContent={"Aún no enviado"} color="success"></Badge>
          </div>
        </section>
        <section id="carga-licencia">
          <div>
            <span>
              <InputLabel id="demo-select-small">TIPO DE LICENCIA</InputLabel>
              <Select labelId="demo-select-small" value="None">
                <MenuItem value="None">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </span>
            <span>
              <h3>Archivo adjuntos</h3>
              <p>No hay archivos adjuntos todavia</p>
              <Button variant="contained">SUBIR ARCHIVO</Button>
            </span>
          </div>
          <div id="fecha-licencia">
            <span className="calendario-widget">
                <span>{"Septiembre"}</span>
                <span>{21}{" Lunes"}</span>
            </span>
            <span className="calendario-widget">
                <span>{"Septiembre"}</span>
                <span>{21}{" Lunes"}</span>
            </span>
            <ButtonGroup id="grupo-botones-licencia">
              <Button>{8} dias laborales.</Button>
              <Button>{24} dias disponibles</Button>
            </ButtonGroup>
          </div>
          <div id="descripcion-razon-licencia">
            <h4>DESCRIPCION</h4>
           <textarea placeholder="Viaje al centro de la tierra" rows="4" cols="50"></textarea> 
          </div>
        </section>
        <section id="responsable-licencia">
          <p>Aprobación a cargo de:</p>
          <div id="contenedor-usuario">
            <Avatar alt="avatar-usuario" src={scaloni} />
            <p>LIONEL SCALONI</p>
          </div>
          <Button variant="contained" id="boton-licencia">
            SOLICITAR APROBACION
          </Button>
        </section>
      </main>
      <aside></aside>
    </>
  );
};

export default CargarLicenciaPage;
