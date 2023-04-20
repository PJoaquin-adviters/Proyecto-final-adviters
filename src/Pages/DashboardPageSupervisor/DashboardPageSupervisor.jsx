import { IconButton, InputAdornment, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import ListItemCargaLicencia from "../../components/ListItemCargaLicencia/ListItemCargaLicencia";
import Lista from "../../components/lista/Lista";
import "./DashboardPageSupervisor.css";
import ListItemSolicitudes from "../../components/ListItemSolicitudes/ListItemSolicitudes";
import MockupCalendario from "../../components/MockupCalendario/MockupCalendario";
import MockupWeather from "../../components/MockupWeather/MockupWeather";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment, useContext, useEffect, useState } from "react";

import LicencesService from '../../services/LicencesService'
import CalendarService from '../../services/CalendarService'
import Loading from "../../components/Loading/Loading";
import HolidayList from "../../components/HolidayList/HolidayList";
import UserDataContext from "../../context/UserDataContext";

const DashboardPage = () => {

  const { setAppTitle } = useContext(UserDataContext);
  setAppTitle("DASHBOARD")

  const solicitudesPendientes = [
    {
      username: "flex",
      lastname: "joe",
      img: null,
      startDate: "2023-02-18",
      endDate: "2023-02-18",
      type: "Vacaciones",
    },
    {
      username: "jordi",
      lastname: "joe",
      img: "fgdfg",
      startDate: "2023-02-18",
      endDate: "2023-02-18",
      type: "Vacaciones",
    },
    {
      username: "flex",
      lastname: "joe",
      img: null,
      startDate: "2023-02-18",
      endDate: "2023-02-18",
      type: "Vacaciones",
    },
    {
      username: "jordi",
      lastname: "joe",
      img: "fgdfg",
      startDate: "2023-02-18",
      endDate: "2023-02-18",
      type: "Vacaciones",
    },
    {
      username: "flex",
      lastname: "joe",
      img: null,
      startDate: "2023-02-18",
      endDate: "2023-02-18",
      type: "Vacaciones",
    },
  ];

  let solicitudesTerminadas = 0;
  const [state, setState] = useState(null);
  let savingData = {};


  const getLicenciasPendientes = async () => {

    try {

      const {data} = await LicencesService.getPendingLicences();
      savingData.licenciasPendientes = data;
      checkIfAllDataWasGetted();

    } catch (e) {

      console.log(e);
      displayError();

    }

  }
  
  const getLicenciasAprobadas = async () => {

    try {

      const {data} = await LicencesService.getApprovedLicences();
      savingData.licenciasAprobadas = data;
      checkIfAllDataWasGetted();

    } catch (e) {

      console.log(e);
      displayError();

    }

  }

  const getFeriados = async () => {
    try {

      const { data } = await CalendarService.getHolidays();
      savingData.feriados = data;
      checkIfAllDataWasGetted();

    } catch (e) {

      console.log(e);
      displayError();

    }
  }; 

  const checkIfAllDataWasGetted = () => {
    solicitudesTerminadas++
    if (solicitudesTerminadas == 3) setState({
      licenciasPendientes: savingData.licenciasPendientes,
      licenciasAprobadas: savingData.licenciasAprobadas,
      feriados: savingData.feriados
    })
  }

  const displayError = () => {
    alert("Ocurrió un error. Recarge la página e intente nuevamente.")
  }

  useEffect(() => {
    // getLicenciasPendientes()
    // getLicenciasAprobadas()
    // getFeriados()
  }, [])

  return (
    <>
      {
        !state ? <Loading/>
        : <section className="dashboardSup-container-gral">
        <div className="dashboardSup-mockup-container">
          <div className="dash-busqueda">
            <TextField
              id="outlined-basic"
              label="Busqueda"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <MockupWeather></MockupWeather>
          <MockupCalendario></MockupCalendario>
          <div className="mock-calendar-holidayList">
          <Typography variant="h5">Próximos feriados</Typography>
          <HolidayList>
              {state.feriados?.map((holiday, index) => (
                <ListItem key={`holiday-${index}`} divider={true}>
                  <ListItemText
                    primary={
                      <Fragment>
                        <Typography
                          component="span"
                          variant="h5"
                          color="text.primary"
                        >
                          {holiday.date} - {holiday.descripcion}
                        </Typography>
                      </Fragment>
                    }
                  />
                </ListItem>
              ))}
            </HolidayList>
        </div>
        </div>
  
        <div className="lista-dashboard-container">
          <div className="lista-dashboard">
            <Lista titulo="Solicitudes Pendientes">
              {state?.licenciasPendientes.map((el, index) => (
                <ListItemSolicitudes key={index} data={el} displayIconos={true} />
              ))}
            </Lista>
          </div>
          <div className="lista-dashboard-licencias-aprobadas">
            <Lista titulo="Proximas licencias aprobadas">
              {state?.licenciasAprobadas.map((el, index) => (
                <ListItemSolicitudes key={index} data={el} displayIconos={false} />
              ))}
            </Lista>
          </div>
        </div>
      </section>
      }
    </>
  );
};

export default DashboardPage;
