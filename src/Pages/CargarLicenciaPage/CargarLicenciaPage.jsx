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
import { newLicense } from "../../utils/LicensesUtils";
import { useTheme } from "@emotion/react";

const CargarLicenciaPage = () => {
  const formInicial = {
    idUser: "",
    idLicenceType: "",
    description: "",
    documentation: "",
    startDate: "",
    endDate: "",
    status: "",
    totalAvailableDays: 30,
    createdAt: "",
    createdBy: "",
    updatedAt: "",
    updatedBy: "",
  };
  const [form, setForm] = useState(formInicial);
  const [errores, setErrores] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await newLicense(form);
    } catch (error) {
      setErrores(error);
      // errores.foreach(err =>{
      //   console.log(err)});
    }
  };

  return (
    <Grid container padding={2} justifyContent={"space-around"}>
      <Grid item xs={12} lg={7}>
        <main id="cl-contenedor">
          <section id="cl-titulo">
            <div>
              <Avatar
                sx={{
                  marginRight: "20px",
                }}
                className="fotocargarlicencia"
                alt="scaloni"
                src={scaloniUrl}
              />
              <Typography
                variant="overline"
                sx={{
                  paddingRight: "20px",
                }}
              >
                Ricky
              </Typography>
            </div>
            <div>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.8em",
                }}
              >
                Balance actual: <b>24 días</b>
              </Typography>
            </div>
            <div>
              <Typography
                variant="button"
                display={"block"}
                sx={{
                  fontSize: "0.9em",
                  padding: "0 0 0 20px",
                }}
              >
                ESTADO
              </Typography>
              <Badge
                badgeContent={"Aún no enviado"}
                color="success"
                sx={{
                  margin: "10px 0 0 20px",
                }}
              ></Badge>
            </div>
          </section>
          <section id="cl-carga-licencia">
            <div>
              <span className="center-items">
                <InputLabel id="cl-demo-select-small" sx={{}}>
                  TIPO DE LICENCIA
                </InputLabel>
                <Select
                  labelId="cl-demo-select-small"
                  defaultValue="None"
                  name="idLicenceType"
                  onChange={handleChange}
                  error={errores.supervisor}
                  helpertext={errores.supervisor}
                >
                  <MenuItem value="None" disabled>
                    <em>SELECCIONE EL MOTIVO</em>
                  </MenuItem>
                  <MenuItem value={0}>Licencia médica</MenuItem>
                  <MenuItem value={1}>Vacaciones</MenuItem>
                  <MenuItem value={2}>Dia de estudio</MenuItem>
                </Select>
              </span>
              <span className="center-items">
                <Typography variant="h6">Archivo adjuntos</Typography>
                <Typography variant="caption" display="block">
                  No hay archivos adjuntos todavia
                </Typography>
                <Button variant="contained" component="label">
                  SUBIR ARCHIVO
                  <input type="file" hidden name="documentation" />
                  value={form?.documentation}
                </Button>
              </span>
            </div>
            <div id="cl-fecha-licencia">
              <div>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">DESDE</Typography>
                  <input type="date" name="startDate" onChange={handleChange} />
                  value={form?.startDate}
                  error = {errores.startDate} 
                  helpertext = {errores.startDate}/>
                </span>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">HASTA</Typography>
                  <input type="date" name="endDate" onChange={handleChange} />
                  value={form?.endDate}
                  error = {errores.endDate} 
                  helpertext = {errores.endDate}
                </span>
              </div>
              <ButtonGroup
                sx={{
                  paddingTop: "10px",
                  gap: "10px",
                }}
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
                value={form?.description}
                error = {errores.description} 
                helpertext = {errores.description}
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
              onClick={handleSubmit}
            >
              SOLICITAR APROBACION
            </Button>
          </section>
          <div className="cargarLicenciaPageErrors">
            {errores && errores.map((err, index) => <p key={index}>{err}</p>)}
          </div>
        </main>
      </Grid>

      <Grid item xs={12} lg={4}>
        <aside className="cl-aside-licencia">
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
