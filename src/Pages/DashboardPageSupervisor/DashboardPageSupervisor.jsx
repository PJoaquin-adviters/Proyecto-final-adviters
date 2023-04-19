import { ListItem, TextField } from "@mui/material";
import ListItemCargaLicencia from "../../components/ListItemCargaLicencia/ListItemCargaLicencia";
import Lista from "../../components/lista/Lista";
import "./DashboardPageSupervisor.css";
import ListItemSolicitudes from "../../components/ListItemSolicitudes/ListItemSolicitudes";
import MockupCalendario from "../../components/MockupCalendario/MockupCalendario";
import MockupWeather from "../../components/MockupWeather/MockupWeather";

const DashboardPage = () => {
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
  return (
    <section className="dashboardSup-container-gral">
      <div className="dashboardSup-mockup-container">
        <MockupWeather></MockupWeather>
        <MockupCalendario></MockupCalendario>
      </div>

      <div className="lista-dashboard-container">
        <div className="hola">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>

        <div className="lista-dashboard">
          <Lista titulo="Solicitudes Pendientes">
            {solicitudesPendientes.map((el, index) => (
              <ListItemSolicitudes data={el} displayIconos={true} />
            ))}
          </Lista>
        </div>
        <div className="lista-dashboard-licencias-aprobadas">
          <Lista titulo="Proximas licencias aprobadas">
            {solicitudesPendientes.map((el, index) => (
              <ListItemSolicitudes data={el} displayIconos={false} />
            ))}
          </Lista>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
