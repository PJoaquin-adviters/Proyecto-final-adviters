import {
  IconButton,
  InputAdornment,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import ListItemCargaLicencia from "../../components/ListItemCargaLicencia/ListItemCargaLicencia";
import Lista from "../../components/lista/Lista";
import "./DashboardPageSupervisor.css";
import ListItemSolicitudes from "../../components/ListItemSolicitudes/ListItemSolicitudes";
import MockupCalendario from "../../components/MockupCalendario/MockupCalendario";
import MockupWeather from "../../components/MockupWeather/MockupWeather";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment, useContext, useEffect, useState } from "react";

import LicencesService from "../../services/LicencesService";
import CalendarService from "../../services/CalendarService";
import Loading from "../../components/Loading/Loading";
import HolidayList from "../../components/HolidayList/HolidayList";
import UserDataContext from "../../context/UserDataContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewLicenceDetails from "../../components/ViewLicenceDetails/ViewLicenceDetails";

const DashboardPage = () => {
  const { setAppTitle } = useContext(UserDataContext);
  setAppTitle("DASHBOARD");

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
      const { data } = await LicencesService.getPendingLicences();
      console.log(data);
      savingData.licenciasPendientes = data;
      checkIfAllDataWasGetted();
    } catch (e) {
      console.log("error en pendientes", e);
      displayError();
    }
  };

  const getLicenciasAprobadas = async () => {
    try {
      const { data } = await LicencesService.getApprovedLicences();
      savingData.licenciasAprobadas = data;
      checkIfAllDataWasGetted();
    } catch (e) {
      console.log("error en aprobadas", e);
      displayError();
    }
  };

  const getFeriados = async () => {
    try {
      const { data } = await CalendarService.getHolidays();
      savingData.feriados = data;
      checkIfAllDataWasGetted();
    } catch (e) {
      console.log("error en feriados", e);
      displayError();
    }
  };

  const checkIfAllDataWasGetted = () => {
    solicitudesTerminadas++;
    if (solicitudesTerminadas == 2)
      setState({
        licenciasPendientes: savingData.licenciasPendientes,
        licenciasAprobadas: savingData.licenciasAprobadas
      });
  };

  const displayError = () => {
    toast.error("¡Lo sentimos, ocurrió un error :(!");
  };

  useEffect(() => {
    if (new URL(window.location).searchParams.get("licenceCreated")) {
      toast.success("¡Usuario creado correctamente!")
    }
    getLicenciasPendientes();
    getLicenciasAprobadas();
  }, []);

  const [editingLicence, setEditingLicence] = useState(null)

  return (
    <>
      {!state ? (
        <Loading />
      ) : (
        <section className="dashboardSup-container-gral">
          <ViewLicenceDetails licencia={editingLicence} opened={editingLicence}/>
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
          </div>

          <div className="lista-dashboard-container">
            <div className="lista-dashboard">
              <Lista titulo="Solicitudes Pendientes">
                {state?.licenciasPendientes.map((el, index) => (
                  <div onclick={() => setEditingLicence(true)}>
                  <ListItemSolicitudes
                key={index}
                data={el}
                displayIconos={true}
              />
              </div>
                ))}
              </Lista>
            </div>
            <div className="lista-dashboard-licencias-aprobadas">
              <Lista titulo="Proximas licencias aprobadas">
                {state?.licenciasAprobadas.map((el, index) => (
                  <div onclick={() => setEditingLicence(true)}>
                      <ListItemSolicitudes
                    key={index}
                    data={el}
                    displayIconos={false}
                  />
                  </div>
                  
                ))}
              </Lista>
            </div>
          </div>
        </section>
      )}
      <ToastContainer />
    </>
  );
};

export default DashboardPage;
