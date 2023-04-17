
import { ListItem } from "@mui/material";
import ListItemCargaLicencia from "../../components/ListItemCargaLicencia/ListItemCargaLicencia";
import Lista from "../../components/lista/Lista";
import "./DashboardPageSupervisor.css";
import ListItemSolicitudes from "../../components/ListItemSolicitudes/ListItemSolicitudes";


const DashboardPage = () => {
  const solicitudesPendientes = [{
    "username": "flex",
    "lastname": "joe",
    "img": null,
    "startDate": "2023-02-18",
    "endDate": "2023-02-18",
    "type": "Vacaciones"
  },
  {
    "username": "jordi",
    "lastname": "joe",
    "img": "fgdfg",
    "startDate": "2023-02-18",
    "endDate": "2023-02-18",
    "type": "Vacaciones"
  }
  ]
  return (


    < section >

      <div className="lista-dashboard-container">
        <div className="lista-dashboard">
          <Lista titulo="Solicitudes Pendientes">
            {solicitudesPendientes.map((el, index) => (
              <ListItemSolicitudes data={el} displayIconos={true} />
            ))}
          </Lista>
        </div>
        <div className="lista-dashboard">
          <Lista titulo="Proximas licencias aprobadas">
            {solicitudesPendientes.map((el, index) => (
              <ListItemSolicitudes data={el} displayIconos={false} />
            ))}
          </Lista>
        </div>

      </div>


    </ section >
  )
};

export default DashboardPage;
