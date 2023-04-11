import React, { useEffect, useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../../components/Loading/Loading";

const UserPage = () => {
  // El objeto va a estar vacio, ahora esta lleno porque es de prueba pero es para que tenga las keys
  const initData = {
    name: "joa",
    lastname: "par",
    dni: "39054656",
    date: "1996-02-18",
    ciul: "339999999",
    password: "password",
    admissionDate: "1996-02-18",
    email: "joa@par",
    telephone: "1132328090",
    street: "calle joa",
    streetNumber: "123",
    postalCode: "1223",
    tower: "1",
    floor: "3",
    apartment: "12",
    location: "Capital",
    province: "Buenos aires",
    country: "Argentina",
    holiday: 12,
    idAdmin: false,
    supervisorId: 3,
  };
  const [isNew, setIsNew] = useState(true);
  // const ´loader, setLoader]
  // const [state, setState] = useState({
  //   userInfo: {},
  //   rePassword: state.userInfo.password
  // })
  const [userInfo, setUserInfo] = useState(null);
  const [rePassword, setRePassword] = useState(userInfo?.password);

  useEffect(() => {
    // si es true traemos los datos del usuario desde llamando a una funcion en service
    // isNew && setUserInfo({});
    if (isNew) setUserInfo({});
    else {
      setTimeout(() => {
        setUserInfo({});
      }, 1500);
    }
  }, []);

  const handleChange = (e, inputName) => {
    const info = userInfo;
    info[inputName] = e.value;
    setUserInfo({ ...info });
  };

  const createUser = () => {};

  const editUser = () => {};

  return (
    <>
      {!userInfo ? (
        <Loading />
      ) : (
        <section className="profile-page">
          <form className="form-user">
            <div>
              <Typography variant="h2" align="left">
                {isNew ? "Crear Usuario" : "Editar Usuario"}
              </Typography>
            </div>
            <section className="input-section">
              <div className="input-column-container">
                <img src={pictureNotFound} className="profile-picture" alt="" />
                <Select
                  placeholder="Bajo supervisión de: "
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
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

                <TextField
                  id="dni"
                  label="DNI"
                  value={userInfo?.dni}
                  onChange={(e) => handleChange(e, "dni")}
                />
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  value={userInfo?.email}
                  onChange={(e) => handleChange(e, "email")}
                />
              </div>
              <div className="input-column-container">
                <TextField
                  id="name"
                  label="Nombre"
                  value={userInfo?.name}
                  onChange={(e) => handleChange(e, "name")}
                />
                <TextField
                  id="lastname"
                  label="Apellido"
                  value={userInfo?.lastname}
                  onChange={(e) => handleChange(e, "lastname")}
                />
                <TextField
                  id="date"
                  label="Fecha de nacimiento"
                  type="date"
                  value={userInfo?.date}
                  onChange={(e) => handleChange(e, "date")}
                />
                <TextField
                  id="ciul"
                  label="Cuil"
                  value={userInfo?.ciul}
                  onChange={(e) => handleChange(e, "ciul")}
                />
                <TextField
                  id="telephone"
                  label="Telefono"
                  value={userInfo?.telephone}
                  onChange={(e) => handleChange(e, "telephone")}
                />
              </div>
              <div className="input-column-container">
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  value={userInfo?.password}
                  onChange={(e) => handleChange(e, "password")}
                />
                <TextField
                  id="rePassword"
                  label="Repeat password"
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.value)}
                />
                <TextField
                  id="admissionDate"
                  label="Fecha de ingreso"
                  type="date"
                  value={userInfo?.admissionDate}
                  onChange={(e) => handleChange(e, "admissionDate")}
                />
              </div>
            </section>
            <section className="input-section">
              <div className="input-column-container">
                <TextField
                  id="street"
                  label="Calle"
                  value={userInfo?.street}
                  onChange={(e) => handleChange(e, "street")}
                />
                <TextField
                  id="tower"
                  label="Torre"
                  value={userInfo?.tower}
                  onChange={(e) => handleChange(e, "tower")}
                />
                <TextField
                  id="location"
                  label="Localidad"
                  value={userInfo?.location}
                  onChange={(e) => handleChange(e, "location")}
                />
                <TextField
                  id="supervisorId"
                  label="Supervisor"
                  value={userInfo?.supervisorId}
                  onChange={(e) => handleChange(e, "supervisorId")}
                />
                <TextField
                  id="holiday"
                  label="Dias vacaciones"
                  value={userInfo?.holiday}
                  onChange={(e) => handleChange(e, "holiday")}
                />
              </div>
              <div className="input-column-container">
                <TextField
                  id="streetNumber"
                  label="Altura"
                  value={userInfo?.streetNumber}
                  onChange={(e) => handleChange(e, "streetNumber")}
                />
                <TextField
                  id="outlined-required"
                  label="Piso"
                  defaultValue="1"
                />
                <TextField
                  id="province"
                  label="Provincia"
                  value={userInfo?.province}
                  onChange={(e) => handleChange(e, "province")}
                />
              </div>
              <div className="input-column-container">
                <TextField
                  id="postalCode"
                  label="Codigo postal"
                  value={userInfo?.postalCode}
                  onChange={(e) => handleChange(e, "postalCode")}
                />
                <TextField
                  id="apartment"
                  label="Departamento"
                  value={userInfo?.apartment}
                  onChange={(e) => handleChange(e, "apartment")}
                />
                <TextField
                  id="country"
                  label="Pais"
                  value={userInfo?.country}
                  onChange={(e) => handleChange(e, "country")}
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
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => (isNew ? createUser() : editUser())}
              >
                {isNew ? "Guardar" : "Editar"}
              </Button>
            </Box>
          </form>
        </section>
      )}
    </>
  );
};

export default UserPage;
