import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import jordi from "../../assets/img/jordi2.jpg";
import "../../components/ListaDashboardLicenciaUsuarios/listaDashboardLicenciaUsuarios.css";
import ListItemCargaLicencia from "../ListItemCargaLicencia/ListItemCargaLicencia";

const ListaDashboardLicenciaUsuarios = ({ titulo, data }) => {
  return (
    <List
      sx={{
        minWidth: "300px",
        maxHeight: "90vh",
        overflowY: "scroll",
        bgcolor: "background.paper",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          paddingLeft: "1em",
          fontSize: "12px",
          color: "gray",
          borderLeft: "",
        }}
      >
        {titulo}
      </Typography>
      <Divider></Divider>
      {data.map((licencia, index) => (
        <ListItemCargaLicencia
        key={index}
        type={licencia?.tipoDeLicencia?.descripcion}
        totalDiasDisponibles={licencia?.totalAvailableDays}
        startDate={licencia?.startDate}
        endDate={licencia?.endDate}
        hideEdit={true}
      />
      ))}
    </List>
  );
};

export default ListaDashboardLicenciaUsuarios;
