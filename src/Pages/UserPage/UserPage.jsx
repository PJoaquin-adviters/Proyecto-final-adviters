import React, { useContext, useEffect, useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormControl,
  FormHelperText,
  Switch,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../../components/Loading/Loading";
import { getUserRoles } from "../../services/UsersService";
import { newUser } from "../../utils/UsersUtils";
import { BorderColor } from "@mui/icons-material";
import UserDataContext from "../../context/UserDataContext";
import { toast } from "react-toastify";
import UsersService from "../../services/UsersService";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const { dataUser } = useContext(UserDataContext);

  const { setAppTitle } = useContext(UserDataContext);
  const funcion = new URL(window.location).searchParams.get("function");
  const titles = [
    "CREAR NUEVO USUARIO",
    "EDITAR UN USUARIO",
    "EDITAR MI PERFIL",
  ];
  setAppTitle(titles[funcion]);
  const redirect = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    password: "",
    rePassword: "",
    mail: "",
    phone: "",
    floor: "",
    apartment: "",
    street: "",
    street_number: "",
    Postal_code: "",
    tower: "",
    town: "",
    state: "",
    country: "",
    Profile_picture: "",
    role_id: 0,
    birth_date: "",
    start_working_date: "",
    dni: "",
    cuil: "",
    vacation_days: null,
    study_days: null,
    supervisor: null,
  });
  const [rePassword, setRePassword] = useState(userInfo?.password);

  //
  const [errores, setErrores] = useState({});

  const [supervisores, setSupervisores] = useState([]);

  const getUserData = async () => {
    const idParam = new URL(window.location).searchParams.get("userId");
    const userId = funcion == 1 ? idParam : dataUser.idUser;

    try {
      const { data } = await UsersService.getUserById(userId);
      setUserInfo({ ...data, password: "" });
    } catch (e) {
      console.log(e);
      toast.error("Ocurrió un error.");
    }
  };

  const getSupervisores = async () => {
    try {
      const { data } = await UsersService.getSupervisores();
      let list = data.filter((e) => e.id != dataUser.idUser);
      list.unshift({
        id: dataUser.idUser,
        name: "YO",
        last_name: "",
      });
      setSupervisores(list);

      funcion == 0
        ? setUserInfo({ supervisor: dataUser.idUser })
        : getUserData();
    } catch (e) {
      console.log(e);
      toast.error("Ocurrió un error. Intente nuevamente.");
    }
  };

  useEffect(() => {
    getSupervisores();
  }, []);

  const handleChange = (e, inputName) => {
    const info = userInfo;
    info[inputName] = e.target.value;
    console.log(userInfo);
    setUserInfo({ ...info });
  };

  const createUser = async () => {
    try {
      await newUser(userInfo);
      toast.success("Usuario creado correctamente.");
      redirect("/administrarUsuarios");
    } catch (error) {
      if (error.isAnValidationError) setErrores(error);
      else alert("otro error");
      console.log(error);
    }
  };

  const editUser = (userId) => {};

  const editMyProfile = () => {};

  return (
    <>
      {!userInfo ? (
        <Loading />
      ) : (
        <section className="profile-page">
          <form className="form-user">
            <section className="input-section">
              <div className="input-column-container-user">
                {/* sumar para sumar una imagen */}
                <img src={pictureNotFound} className="profile-picture" alt="" />

                <div>
                  <p style={{ margin: "10px" }}>BAJO SUPERVISIÓN DE</p>
                  <select
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      padding: "10px",
                    }}
                    onChange={(e) => handleChange(e, "supervisor")}
                  >
                    {supervisores?.map((e) => (
                      <option value={e.id}>{`${e.name} ${e.last_name}`}</option>
                    ))}
                  </select>
                </div>

                <FormControlLabel
                  control={<Switch id="switchRole" />}
                  label="Es supervisor"
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="dni"
                  label="DNI"
                  required
                  type="number"
                  value={userInfo?.dni}
                  onChange={(e) => handleChange(e, "dni")}
                  error={errores.dni}
                  helperText={errores.dni}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="Email"
                  label="Email"
                  required
                  type="email"
                  value={userInfo?.mail}
                  onChange={(e) => handleChange(e, "mail")}
                  error={errores.mail}
                  helperText={errores.mail}
                />
              </div>
              <div className="input-column-container-inicio">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="name"
                  label="Nombre"
                  required
                  value={userInfo?.name}
                  onChange={(e) => handleChange(e, "name")}
                  error={errores.name}
                  helperText={errores.name}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="lastname"
                  label="Apellido"
                  required
                  value={userInfo?.lastname}
                  onChange={(e) => handleChange(e, "lastname")}
                  error={errores.lastname}
                  helperText={errores.lastname}
                />

                {/* usar un date picker cuando haya más tiempo*/}
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  InputLabelProps={{ shrink: true, required: true }}
                  id="birth_date"
                  label="Fecha de nacimiento"
                  type="date"
                  value={userInfo?.birth_date}
                  onChange={(e) => handleChange(e, "birth_date")}
                  error={errores.birth_date}
                  helperText={errores.birth_date}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="phone"
                  label="Teléfono"
                  type="number"
                  value={userInfo?.phone}
                  onChange={(e) => handleChange(e, "phone")}
                  error={errores.phone}
                  helperText={errores.phone}
                />
              </div>
              <div className="input-column-container-start">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="password"
                  label="Contraseña"
                  required
                  type="password"
                  value={userInfo?.password}
                  onChange={(e) => handleChange(e, "password")}
                  error={errores.password}
                  helperText={errores.password}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="rePassword"
                  label="Repita su contraseña"
                  required
                  type="password"
                  value={rePassword}
                  onChange={(e) => {
                    handleChange(e, "rePassword");
                    setRePassword(e.target.value);
                  }}
                  error={errores.rePassword}
                  helperText={errores.rePassword}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  InputLabelProps={{ shrink: true, required: true }}
                  id="start_working_date"
                  label="Fecha de ingreso"
                  type="date"
                  value={userInfo?.start_working_date}
                  onChange={(e) => handleChange(e, "start_working_date")}
                  error={errores.start_working_date}
                  helperText={errores.start_working_date}
                />
              </div>
            </section>
            <section className="input-section">
              <div className="input-column-container-calles">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="street"
                  label="Calle"
                  value={userInfo?.street}
                  onChange={(e) => handleChange(e, "street")}
                  error={errores.street}
                  helperText={errores.street}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="tower"
                  label="Torre"
                  value={userInfo?.tower}
                  onChange={(e) => handleChange(e, "tower")}
                  error={errores.tower}
                  helperText={errores.tower}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="town"
                  label="Localidad"
                  value={userInfo?.town}
                  onChange={(e) => handleChange(e, "town")}
                  error={errores.town}
                  helperText={errores.town}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="Vacation_days"
                  label="Dias de vacaciones"
                  required
                  type="number"
                  value={userInfo?.vacation_days}
                  onChange={(e) => handleChange(e, "vacation_days")}
                  error={errores.vacation_days}
                  helperText={errores.vacation_days}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="study_days"
                  label="Dias de estudio"
                  required
                  type="number"
                  value={userInfo?.study_days}
                  onChange={(e) => handleChange(e, "study_days")}
                  error={errores.study_days}
                  helperText={errores.study_days}
                />
              </div>
              <div className="input-column-container-ciudad">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="street_number"
                  label="Altura"
                  type="number"
                  value={userInfo?.streetNumber}
                  onChange={(e) => handleChange(e, "street_number")}
                  error={errores.street_number}
                  helperText={errores.street_number}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="outlined-required"
                  label="Piso"
                  defaultValue="1"
                  type="number"
                  error={errores.floor}
                  helperText={errores.floor}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="apartment"
                  label="Departamento"
                  value={userInfo?.apartment}
                  onChange={(e) => handleChange(e, "apartment")}
                  error={errores.apartment}
                  helperText={errores.apartment}
                />
              </div>
              <div className="input-column-container-final">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="postal_code"
                  label="Codigo postal"
                  value={userInfo?.postal_code}
                  onChange={(e) => handleChange(e, "postal_code")}
                  error={errores.postal_code}
                  helperText={errores.postal_code}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="state"
                  label="Provincia"
                  value={userInfo?.state}
                  onChange={(e) => handleChange(e, "state")}
                  error={errores.state}
                  helperText={errores.state}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="country"
                  label="Pais"
                  value={userInfo?.country}
                  onChange={(e) => handleChange(e, "country")}
                  error={errores.country}
                  helperText={errores.country}
                />
              </div>
            </section>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
                paddingRight: "30px",
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  const options = [createUser, editUser, editMyProfile];
                  options[funcion]();
                }}
              >
                Guardar
              </Button>
            </Box>
          </form>
        </section>
      )}
    </>
  );
};

export default UserPage;
