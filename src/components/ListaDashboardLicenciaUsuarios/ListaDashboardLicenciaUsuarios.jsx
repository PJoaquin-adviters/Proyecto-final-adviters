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

const ListaDashboardLicenciaUsuarios = () => {
  const ausentesLista = [
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "estudio",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "estudio",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
  ];
  return (
    <List
      sx={{
        minWidth: "22vw",
        maxWidth: 360,
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
        Mi Historial De Solicitudes
      </Typography>
      <Divider></Divider>
      {ausentesLista.map((element, index) => (
        <>
          <ListItem
            alignItems="flex-start"
            sx={{
              borderLeft: "10px solid green",
            }}
          >
            <ListItemText
              primary={element.username}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "flex", flexDirection: "column" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {element.startDate} , {element.endDate}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {element.idLicenceType}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider></Divider>
        </>
      ))}
    </List>
  );
};

export default ListaDashboardLicenciaUsuarios;
