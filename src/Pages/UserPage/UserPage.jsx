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
} from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../../components/Loading/Loading";
import { getUserRoles } from "../../services/UsersService";
import { newUser } from "../../utils/UsersUtils";
import { BorderColor } from "@mui/icons-material";
import UserDataContext from "../../context/UserDataContext";

const UserPage = () => {
  const { setAppTitle } = useContext(UserDataContext);
  const funcion = new URL(window.location).searchParams.get("function");

  const titles = [
    "CREAR NUEVO USUARIO",
    "EDITAR UN USUARIO",
    "EDITAR MI PERFIL",
  ];

  setAppTitle(titles[funcion]);

  const initData = {
    //id?
    name: "",
    lastname: "",
    password: "",
    rePassword: "",
    mail: "",
    phone: "",
    floor: "",
    apartment: "",
    street: "",
    Street_number: "",
    Postal_code: "",
    tower: "",
    town: "",
    state: "",
    country: "",
    Profile_picture: "",
    Role_id: "0",
    Birth_date: "",
    Start_working_date: "",
    dni: "",
    cuil: "",
    Vacation_days: null,
    Available_vacations_days: "",
    Available_study_days: "",
    supervisor: null,
  };
  const [isNew, setIsNew] = useState(true);
  // const ´loader, setLoader]
  // const [state, setState] = useState({
  //   userInfo: {},
  //   rePassword: state.userInfo.password
  // })
  const [userInfo, setUserInfo] = useState(null);
  const [rePassword, setRePassword] = useState(userInfo?.password);

  //
  const [errores, setErrores] = useState({});

  useEffect(() => {
    // si es true traemos los datos del usuario desde llamando a una funcion en service
    // isNew && setUserInfo({});
    if (isNew) setUserInfo(initData);
    else {
      setTimeout(() => {
        setUserInfo({});
      }, 1500);
    }
  }, []);

  const handleChange = (e, inputName) => {
    const info = userInfo;
    info[inputName] = e.target.value;
    console.log(userInfo);
    setUserInfo({ ...info });
  };

  const createUser = async () => {
    // try {
    //   await newUser(userInfo);
    // } catch (error) {
    //   setErrores(error);
    //   console.log(error);
    // }
    alert("createUser")
  };

  const editUser = (userId) => {
    alert("editUser")
    
  };

  const editMyProfile = () => {
    alert("editMyProfile")

  }

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

                <FormControl error={errores.supervisor} sx={{ width: 200 }}>
                  <Select
                    placeholder="Bajo supervisión  de:"
                    name="supervisor"
                    indicator={<KeyboardArrowDown />}
                    onChange={(e) => {
                      handleChange(e, "supervisor");
                    }}
                    className={`${errores.supervisor && "selectError"}`}
                    sx={{
                      height: 60,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="1">Pepito</Option>
                    <Option value="2">Marcus</Option>
                    <Option value="3">Marge</Option>
                  </Select>
                  <FormHelperText>{errores.supervisor}</FormHelperText>
                </FormControl>

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
                  id="Birth_date"
                  label="Fecha de nacimiento"
                  type="date"
                  value={userInfo?.Birth_date}
                  onChange={(e) => handleChange(e, "Birth_date")}
                  error={errores.Birth_date}
                  helperText={errores.Birth_date}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="cuil"
                  label="Cuil"
                  required
                  type="number"
                  value={userInfo?.ciul}
                  onChange={(e) => handleChange(e, "cuil")}
                  error={errores.cuil}
                  helperText={errores.cuil}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="phone"
                  label="Teléfono"
                  type="number"
                  value={userInfo?.telephone}
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
                  onChange={(e) => handleChange(e, "rePassword")}
                  error={errores.rePassword}
                  helperText={errores.rePassword}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  InputLabelProps={{ shrink: true, required: true }}
                  id="Start_working_date"
                  label="Fecha de ingreso"
                  type="date"
                  value={userInfo?.Start_working_date}
                  onChange={(e) => handleChange(e, "Start_working_date")}
                  error={errores.Start_working_date}
                  helperText={errores.Start_working_date}
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
                  required
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
                  required
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
                  label="Dias vacaciones"
                  required
                  type="number"
                  value={userInfo?.Vacation_days}
                  onChange={(e) => handleChange(e, "Vacation_days")}
                  error={errores.Vacation_days}
                  helperText={errores.Vacation_days}
                />
              </div>
              <div className="input-column-container-ciudad">
                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="Street_number"
                  label="Altura"
                  required
                  type="number"
                  value={userInfo?.streetNumber}
                  onChange={(e) => handleChange(e, "Street_number")}
                  error={errores.Street_number}
                  helperText={errores.Street_number}
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
                  id="Postal_code"
                  label="Codigo postal"
                  value={userInfo?.Postal_code}
                  onChange={(e) => handleChange(e, "Postal_code")}
                  error={errores.Postal_code}
                  helperText={errores.Postal_code}
                />

                <TextField
                  sx={{
                    width: "80%",
                  }}
                  id="state"
                  label="Provincia"
                  required
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
                  required
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
                  const options = [
                    createUser,
                    editUser,
                    editMyProfile,
                  ];
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
