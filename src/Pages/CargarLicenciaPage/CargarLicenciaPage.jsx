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
    <section className="center-page">
      <div id="cl-contenedor">
        <section id="cl-titulo">
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
        <section id="cl-carga-licencia">
          <div>
            <span>
              <InputLabel id="cl-demo-select-small">
                TIPO DE LICENCIA
              </InputLabel>
              <Select labelId="cl-demo-select-small" value="None">
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
          <div id="cl-fecha-licencia">
            <span className="cl-calendario-widget">
              <span>{"Septiembre"}</span>
              <span>
                {21}
                {" Lunes"}
              </span>
            </span>
            <span className="cl-calendario-widget">
              <span>{"Septiembre"}</span>
              <span>
                {21}
                {" Lunes"}
              </span>
            </span>
            <ButtonGroup
              id="cl-grupo-botones-licencia"
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
              className="cl-textarea"
            ></textarea>
          </div>
        </section>
        <section id="cl-responsable-licencia">
          <Typography variant="h6" align="left">
            Aprobación a cargo de:
          </Typography>
          <div id="cl-contenedor-usuario">
            <Avatar alt="avatar-usuario" src={scaloni} />
            <Typography variant="overline">LIONEL SCALONI</Typography>
          </div>
          <Button variant="contained" id="cl-boton-licencia">
            SOLICITAR APROBACION
          </Button>
        </section>
      </div>
    </section>
  );
};

export default CargarLicenciaPage;
