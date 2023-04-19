import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListaAusentesDashboard from "../../components/ListaAusentesDashboard/ListaAusentesDashboard";
import ListaDashboardLicenciaUsuarios from "../../components/ListaDashboardLicenciaUsuarios/ListaDashboardLicenciaUsuarios";
import "./DashboardPageUsuario.css";
import MockupCalendario from "../../components/MockupCalendario/MockupCalendario";
import MockupWeather from "../../components/MockupWeather/MockupWeather";
import { Box, Button } from "@mui/material";
const DashboardPageUsuarios = () => {
  return (
    <div className="dashUsuarios-container-Gral">
      <div className="dashUsuarios-mockup-container">
        <MockupWeather></MockupWeather>
        <MockupCalendario></MockupCalendario>
      </div>

      <div className="dashUsuarios-lista-licencias">
        <ListaDashboardLicenciaUsuarios titulo="Mi historial de solicitudes"></ListaDashboardLicenciaUsuarios>
        <ListaDashboardLicenciaUsuarios titulo="Mis próximas licencias"></ListaDashboardLicenciaUsuarios>
      </div>

      <div className="dashUsuarios-flexColumn">
        <Button
          sx={{
            padding: "5px",
            width: "200px",
            margin: "2em",
          }}
          variant="contained"
          color="success"
        >
          Crear Nueva Solicitud
        </Button>
        <ListaAusentesDashboard />
        <div className="ds-usu-vacaciones">
          <h2>Dias Disponibles</h2>
          <p>23</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageUsuarios;
