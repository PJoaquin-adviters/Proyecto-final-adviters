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
import UserDataContext from "../../context/UserDataContext";
import Loading from "../../components/Loading/Loading";
import LicencesService from '../../services/LicencesService'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const DashboardPageUsuarios = () => {

  const { setAppTitle, dataUser} = React.useContext(UserDataContext);
  setAppTitle("DASHBOARD")
  const redirect = useNavigate();

  const [data, setData] = React.useState(null);

  const getData = async () => {

    try {

      const response = await LicencesService.getLicenceByUser(dataUser.idUser);
      let todas = response.data;

      const hoy = Date.now();
      let historial = todas.filter(e => Date.parse(e.startDate) < hoy)
      let proximas = todas.filter(e => Date.parse(e.startDate) > hoy)

      setData({historial, proximas})

    } catch (e) {

      toast.error("Ocurrió un error. Intente nuevamente.")
      console.log(e);

    }

  }

  React.useEffect(() => {
    if (new URL(window.location).searchParams.get("licenceCreated")) {
      toast.success("¡Usuario creado correctamente!")
    }
    getData()
  }, [])

  return (
    <>
    {!data ? <Loading/> :
    <div className="dashUsuarios-container-Gral">
      <MockupWeather></MockupWeather>

      <ListaDashboardLicenciaUsuarios titulo="Mi historial de solicitudes" data={data.historial}/>
      <ListaDashboardLicenciaUsuarios titulo="Mis próximas licencias" data={data.proximas}/>

    <div className="dashUsuarios-flexColumn">
      <Button
        sx={{
          padding: "5px",
          width: "200px",
          margin: "2em",
        }}
        variant="contained"
        color="success"
        onClick={() => redirect("/cargarLicencia")}
      >
        Crear Nueva Solicitud
      </Button>
      <ListaAusentesDashboard />
      <div className="ds-usu-vacaciones">
        <h2>Dias Disponibles</h2>
        <p>23</p>
      </div>
    </div>
  </div>}
    </>
  );
};

export default DashboardPageUsuarios;
