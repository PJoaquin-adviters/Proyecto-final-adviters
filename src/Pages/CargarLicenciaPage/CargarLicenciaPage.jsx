import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Select,
  MenuItem,
  InputLabel,
  ButtonGroup,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import Lista from "../../components/lista/Lista";
import ListItemCargaLicencia from "../../components/ListItemCargaLicencia/ListItemCargaLicencia";
import scaloniUrl from "./scaloni.jpg";
import "./CargarLicenciaStyle.css";

const CargarLicenciaPage = () => {
  const [datosLicenciaNueva, setDatosLicenciaNueva] = useState({});
  // const datosUsuario = getDatosUsuario();

  const handleChange = (e) => {
    datosLicenciaNueva[e.target.name] = e.target.value;
    console.log(datosLicenciaNueva);
  };

  const postDatosLicencia = () => {
    //validar data
    //saveLicencia(datosLicenciaNueva)
    alert(datosLicenciaNueva);
  };

  return (
    //el grid es de 12. Entonces, puse lg -> 8 para que un espacio sobre y pueda ser usado como un distanciamiento parejo entre el container principal y la lista
    <Grid container padding={2} justifyContent={"space-around"}>
      <Grid xs={12} lg={7}>
        <main id="cl-contenedor">
          <section id="cl-titulo">
            <div>
              <Avatar alt="scaloni" src={scaloniUrl} />
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
                <Select
                  labelId="cl-demo-select-small"
                  value="None"
                  name="type"
                  onChange={handleChange}
                >
                  <MenuItem value="None">
                    <em>SELECCIONE EL MOTIVO</em>
                  </MenuItem>
                  <MenuItem value={"licencia medica"}>Licencia médica</MenuItem>
                  <MenuItem value={"vacaciones"}>Vacaciones</MenuItem>
                  <MenuItem value={"dias estudio"}>Dia de estudio</MenuItem>
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
              <div>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">DESDE</Typography>
                  <input type="date" name="startDate" onChange={handleChange} />
                </span>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">HASTA</Typography>
                  <input type="date" name="endDate" onChange={handleChange} />
                </span>
              </div>
              <ButtonGroup
                id="cl-grupo-botones-licencia"
                size="small"
                color="primary"
              >
                <Button disabled>{8} dias laborales.</Button>
                <Button disabled>{24} dias disponibles</Button>
              </ButtonGroup>
            </div>
            <div>
              <Typography variant="h6">DESCRIPCION</Typography>
              <textarea
                placeholder="Ingresa más información acerca de la licencia."
                rows="4"
                cols="50"
                className="cl-textarea"
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
          </section>
          <section id="cl-responsable-licencia">
            <Typography variant="h6" align="left">
              Aprobación a cargo de:
            </Typography>
            <div id="cl-contenedor-usuario">
              <Avatar alt="avatar-usuario" src={scaloniUrl} />
              <Typography variant="overline">LIONEL SCALONI</Typography>
            </div>
            <Button
              variant="contained"
              id="cl-boton-licencia"
              sx={{ width: "fit-content", padding: "1em 2.5em" }}
              onClick={postDatosLicencia}
            >
              SOLICITAR APROBACION
            </Button>
          </section>
        </main>
      </Grid>

      <Grid xs={12} lg={4}>
        <aside>
          <Lista titulo="Detalle de Vacaciones">
              <ListItemCargaLicencia
                type="licencia medica"
                totalDiasDisponibles={20}
                startDate="12/01"
                endDate="13/01"
              ></ListItemCargaLicencia>
          </Lista>
        </aside>
      </Grid>
    </Grid>
  );
};

export default CargarLicenciaPage;
