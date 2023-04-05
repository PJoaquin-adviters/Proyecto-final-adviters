import React from "react";
import {
  Avatar,
  Badge,
  Select,
  MenuItem,
  InputLabel,
  ButtonGroup,
  Button,
  DatePicker,
  Typography,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import { DateRangePicker } from "@mui/lab";
import scaloni from "./scaloni.jpg";
import "./CargarLicenciaStyle.css";

const CargarLicenciaPage = () => {
  return (
    <Grid container>
      <Grid sm={12} md={10}>
        <main id="contenedor">
          <section id="titulo">
            <div>
              <Avatar alt="scaloni" src={scaloni} />
              <Typography variant="overline">Ricky</Typography>
            </div>
            <div>
              <Typography variant="h6">
                Balance actual: <b>24 días</b>
              </Typography>
            </div>
            <div>
              <Typography variant="button" display={"block"}>
                ESTADO
              </Typography>
              <Badge badgeContent={"Aún no enviado"} color="success"></Badge>
            </div>
          </section>
          <section id="carga-licencia">
            <div>
              <span>
                <InputLabel id="demo-select-small">TIPO DE LICENCIA</InputLabel>
                <Select labelId="demo-select-small" value="None">
                  <MenuItem value="None">
                    <em>Licencias</em>
                  </MenuItem>
                  {/* cambiar esto */}
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </span>
              <span>
                <Typography variant="h6">Archivo adjuntos</Typography>
                <Typography variant="caption" display="block">
                  No hay archivos adjuntos todavia
                </Typography>
                <Button variant="contained">SUBIR ARCHIVO</Button>
              </span>
            </div>
            <div id="fecha-licencia">
              <span className="calendario-widget">
                <span>{"Septiembre"}</span>
                <span>
                  {21}
                  {" Lunes"}
                </span>
              </span>
              <span className="calendario-widget">
                <span>{"Septiembre"}</span>
                <span>
                  {21}
                  {" Lunes"}
                </span>
              </span>
              <ButtonGroup
                id="grupo-botones-licencia"
                size="small"
                color="primary"
              >
                <Button>{8} dias laborales.</Button>
                <Button>{24} dias disponibles</Button>
              </ButtonGroup>
            </div>
            <div>
              <Typography variant="h6">DESCRIPCION</Typography>
              <textarea
                placeholder="Viaje al centro de la tierra"
                rows="4"
                cols="50"
              ></textarea>
            </div>
          </section>
          <section id="responsable-licencia">
            <Typography variant="h6" align="left">
              Aprobación a cargo de:
            </Typography>
            <div id="contenedor-usuario">
              <Avatar alt="avatar-usuario" src={scaloni} />
              <Typography variant="overline">LIONEL SCALONI</Typography>
            </div>
            <Button variant="contained" id="boton-licencia">
              SOLICITAR APROBACION
            </Button>
          </section>
        </main>
      </Grid>

      <Grid sm={12} md={2}>
      <aside></aside>
      </Grid>
      
    </Grid>
  );
};

export default CargarLicenciaPage;
