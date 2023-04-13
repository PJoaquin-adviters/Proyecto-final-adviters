import React, { useEffect, useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./UserPage.css";
import pictureNotFound from "../../assets/img/user-not-found.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loading from "../../components/Loading/Loading";
import { getUserRoles } from "../../services/UsersService";
import { newUser } from "../../utils/UsersUtils";

const UserPage = () => {
  // El objeto va a estar vacio, ahora esta lleno porque es de prueba pero es para que tenga las keys

  //verificar que la contraseña se repita?
  
  const initData = {
    //id?
    name: "",
    lastname: "",
    password: "",
    //chequear eso
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
    Vacation_days: "",
    Available_vacations_days: "",
    Available_study_days: "",
    supervisor: null,
    //
    Created_at:"",
    Created_by:"",
    Updated_at: "",
    Updated_by: "",
    Deleted_at: "", 



    //arreglar los campos del input
    //arreglar las validaciones para cada input 
    //arreglar que se vean los problemas

    //////tenemos que referenciar al obj del supervisor (tipo, a la data) para poder acceder a eso
    //primero con los inputs, después completamos todo el objeto agarrando datos de los otros objetos.

//    admissionDate: "",
//    location: "",
//    province: "",
    holiday: 0,
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
  const [errores, setErrores] = useState(null);

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
    console.log(info)
    setUserInfo({ ...info });
  };

  const createUser = async () => {
    try {
      
      await newUser(userInfo)

      
    } catch (error) {
      //le paso al set para ver si puedo renderizar
      setErrores(error);
      console.log(error);
      
    }
  };

  const editUser = () => {
    let errores = newUser(userInfo);
  };

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
                  name=""
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
                  id="Birth_date"
                  label="Fecha de nacimiento"
                  type="date"
                  value={userInfo?.date}
                  onChange={(e) => handleChange(e, "Birth_date")}
                />
                <TextField
                  id="cuil"
                  label="cuil"
                  value={userInfo?.ciul}
                  onChange={(e) => handleChange(e, "cuil")}
                />
                <TextField
                  id="phone"
                  label="phone"
                  value={userInfo?.telephone}
                  onChange={(e) => handleChange(e, "phone")}
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
                  id="Start_working_date"
                  label="Fecha de ingreso"
                  type="date"
                  value={userInfo?.Start_working_date}
                  onChange={(e) => handleChange(e, "Start_working_date")}
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
                  id="town"
                  label="Localidad"
                  value={userInfo?.town}
                  onChange={(e) => handleChange(e, "town")}
                />
                <TextField
                  id="supervisorId"
                  label="Supervisor"
                  value={userInfo?.supervisorId}
                  onChange={(e) => handleChange(e, "supervisorId")}
                />
                <TextField
                  id="Vacation_days"
                  label="Dias vacaciones"
                  value={userInfo?.Vacation_days}
                  onChange={(e) => handleChange(e, "Vacation_days")}
                />
              </div>
              <div className="input-column-container">
                <TextField
                  id="Street_number"
                  label="Altura"
                  value={userInfo?.streetNumber}
                  onChange={(e) => handleChange(e, "Street_number")}
                />
                <TextField
                  id="outlined-required"
                  label="Piso"
                  defaultValue="1"
                />
                <TextField
                  id="state"
                  label="state"
                  value={userInfo?.state}
                  onChange={(e) => handleChange(e, "state")}
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

            <div className="UserPageErrors">
            {
              errores&& (
                errores.map((err, index) => 
                  <p key={index}>{err}</p>
                )
              )
            }
            </div>

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
