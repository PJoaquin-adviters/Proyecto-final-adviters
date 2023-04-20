import React, { useContext, useEffect, useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Loading from "../../components/Loading/Loading";
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
import LicencesService from "../../services/LicencesService";
import UsersService from "../../services/UsersService";
import UserDataContext from "../../context/UserDataContext";
import { useNavigate } from "react-router-dom";

const CargarLicenciaPage = () => {
  const formInicial = {
    idUser: "",
    idLicenceType: "",
    documentation: "",
    startDate: "",
    endDate: "",
  };
  const [form, setForm] = useState(formInicial);
  const [errores, setErrores] = useState({});
  const [userLicences, setUserLicences] = useState(null);
  const [supervisorData, setSupervisorData] = useState(null);
  const {
    dataUser,
    dataUser: { idRol },
    setAppTitle,
  } = useContext(UserDataContext);
  setAppTitle("CARGAR LICENCIA");
  const redirect = useNavigate();

  const getUserLicences = async () => {
    getSupervisorData();
    try {
      const { idUser } = dataUser;
      const { data } = await LicencesService.getLicenceByUser(idUser);

      console.log(data);
      setUserLicences(data);
    } catch (e) {
      console.log(e);
      alert("error compa");
    }
  };

  const getLicencesBySupervisor = async () => {
    try {
      const { idUser } = dataUser;
      const { data } = await LicencesService.getLicencesBySupervisor(idUser);
      console.log(data);
      setUserLicences(data);
    } catch (e) {
      console.log(e);
      alert("error compa");
    }
  };

  const getSupervisorData = async () => {
    try {
      const { data } = await UsersService.getUserById(dataUser?.supervisorId);
      setSupervisorData(data);
    } catch (e) {
      console.log(e);
      alert("error compa");
    }
  };

  const handleChange = (e, nameInput) => {
    const info = form;
    form[nameInput] = e.target.value;
    console.log(info);
    setForm({ ...info });
  };

  const handleSubmit = async () => {
    console.log(form);
    setErrores({});
    try {
      const { idUser } = dataUser;
      await LicencesService.newLicence(idUser, form);
      redirect("/");
    } catch (error) {
      setErrores(error);
      console.log(error);
    }
  };

  useEffect(() => {
    idRol == 0 ? getLicencesBySupervisor() : getUserLicences();
  }, []);

  return (
    <>
      {!userLicences ? (
        <Loading />
      ) : (
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
                    {dataUser?.name}
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
                {/* <div className="Layout-Descripcion-column">
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
                  )} */}
                {/* </div> */}
              </section>

              <section id="cl-responsable-licencia">
                {dataUser.idRol == 1 && (
                  <>
                    <Typography variant="h6" align="left">
                      Aprobación a cargo de:
                    </Typography>
                    <div id="cl-contenedor-usuario">
                      <Avatar alt="avatar-usuario" src={scaloniUrl} />
                      <Typography variant="overline">{`${supervisorData?.name} ${supervisorData?.lastname}`}</Typography>
                    </div>
                  </>
                )}
                <div id="cl-boton-licencia">
                  <Button
                    variant="contained"
                    sx={{
                      width: "fit-content",
                      padding: "1em 2.5em",
                      float: "right",
                    }}
                    onClick={handleSubmit}
                  >
                    SOLICITAR APROBACION
                  </Button>
                </div>
              </section>
            </main>
          </Grid>

          <Grid item xs={12} lg={4}>
            <aside className="cl-aside-licencia">
              <Lista titulo="Detalle de Vacaciones">
                {userLicences.map((licencia, index) => (
                  <ListItemCargaLicencia
                    key={index}
                    type={licencia?.tipoDeLicencia?.descripcion}
                    totalDiasDisponibles={licencia?.totalAvailableDays}
                    startDate={licencia?.startDate}
                    endDate={licencia?.endDate}
                  />
                ))}
              </Lista>
            </aside>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CargarLicenciaPage;
