import React, { useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import {
  Avatar,
  Badge,
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
  const [errores, setErrores] = useState({});

  const handleChange = (e, nameInput) => {
    // const { name, value } = e.target;

    // if (e.target.id == ":r2:-option-0") {
    //   name = "idLicenceType",
    //   value = "0"
    // } else if (e.target.id == ":r2:-option-1") {
    //   name = "idLicenceType",
    //   value = "1"
    // }
    const info = form;
    form[nameInput] = e.target.value;
    console.log(info);
    setForm({ ...info });
  };

  const handleSubmit = async () => {
    console.log(form);
    try {
      await newLicense(form);
    } catch (error) {
      setErrores(error);
      console.log(error);
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
              <span
                className="center-items"
                style={{ flexDirection: "column" }}
              >
                <Typography variant="button">TIPO DE LICENCIA</Typography>

                <TextField
                  select
                  label="Licencia"
                  onChange={(e) => {
                    handleChange(e, "idLicenceType");
                  }}
                  error={errores.idLicenceType && true}
                  value={form?.idLicenceType}
                  indicator={<KeyboardArrowDown />}
                  placeholder="licencia"
                  name="idLicenceType"
                  helpertext={errores.idLicenceType}
                >
                  <MenuItem value={0}>Licencia médica</MenuItem>
                  <MenuItem value={1}>Vacaciones</MenuItem>
                  <MenuItem value={2}>Dia de estudio</MenuItem>
                </TextField>
                {errores.idLicenceType && (
                  <Typography variant="caption" color={"darkred"}>
                    {errores.idLicenceType}
                  </Typography>
                )}
              </span>
              <span className="center-items">
                <Typography variant="h6">Archivo adjuntos</Typography>
                <Typography variant="caption" display="block">
                  No hay archivos adjuntos todavia
                </Typography>
                <Button variant="contained" component="label">
                  SUBIR ARCHIVO
                  <input
                    type="file"
                    hidden
                    name="documentation"
                    value={form?.documentation}
                    onChange={(e) => {
                      handleChange(e, "documentation");
                    }}
                  />
                </Button>
              </span>
            </div>
            <div id="cl-fecha-licencia">
              <div>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">DESDE</Typography>
                  <TextField
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    label="Día Inicio"
                    name="startDate"
                    error={errores.startDate && true}
                    onChange={(e) => {
                      handleChange(e, "startDate");
                    }}
                    value={form?.startDate}
                    helpertext={errores.startDate}
                  />
                  {errores.startDate && (
                    <Typography variant="caption" color={"darkred"}>
                      {errores.startDate}
                    </Typography>
                  )}

                </span>
                <span className="cl-calendario-widget">
                  <Typography variant="overline">HASTA</Typography>
                  <TextField
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    label="Día Fin"
                    name="endDate"
                    onChange={(e) => {
                      handleChange(e, "endDate");
                    }}
                    value={form?.endDate}
                    error={errores.endDate && true}
                  />
                  {errores.endDate && (
                    <Typography variant="caption" color={"darkred"}>
                      {errores.endDate}
                    </Typography>
                  )}
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
                onChange={(e) => {
                  handleChange(e, "description");
                }}
                style={
                  errores.description && {
                    border: "1px solid darkred",
                    borderRadius: "5px",
                  }
                }
                value={form?.description}
                helpertext={errores.description}
              ></textarea>
              {errores.description && (
                <Typography variant="caption" color={"darkred"}>
                  {errores.description}
                </Typography>
              )}
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
