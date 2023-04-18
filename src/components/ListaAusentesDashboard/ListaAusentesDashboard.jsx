import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import jordi from "../../assets/img/jordi2.jpg";

const ListaAusentesDashboard = () => {
  const ausentesLista = [
    {
      img: "null",
      username: "joe",
      startDate: "22/2",
      endDate: "22/3",
      idLicenceType: "vacaciones",
    },
  ];
  return (
    <div>
      <List
        sx={{
          width: "20vw",
          maxWidth: 360,
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
          }}
        >
          Quien Esta Ausente?
        </Typography>
        <Divider></Divider>
        {ausentesLista.map((element, index) => (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {/* poner primary dinamico, fecha inicio, fecha fin, motivo */}
                <Avatar alt="foto de usuario" src={jordi} />
              </ListItemAvatar>
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
                    {element.idLicenceType}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider></Divider>
          </>
        ))}
      </List>
    </div>
  );
};

export default ListaAusentesDashboard;
