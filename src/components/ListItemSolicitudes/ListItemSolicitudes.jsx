import React from 'react'
import pictureNotFound from "../../assets/img/user-not-found.png";
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import "./ListItemSolicitudes.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ListItemSolicitudes = ({ data, displayIconos }) => {
    const color = {
        Vacaciones: "verde",
        Estudio: "amarillo",
        "Licencia medica": "azul"
    }


    return (
        <ListItem alignItems="flex-start" sx={{ display: "flex", alignItems: "center" }} divider={true} >
            <ListItemAvatar>
                <Avatar alt={data.username} src={data.img ? data.img : pictureNotFound} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline', fontSize: "18px" }}
                            component="span"
                            variant="h6"
                            color="text.primary"
                        >
                            {`${data.username} ${data.lastname}`}

                        </Typography>

                    </React.Fragment>
                }
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {data.startDate} - {data.endDate}
                        </Typography><br></br>


                        <Typography
                            sx={{ display: 'flex', gap: "10px", alignItems: "center" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            <div className={`punto color-${color[data.type]}`}></div>{data.type}
                        </Typography>



                    </React.Fragment>
                }

            />
            {displayIconos && (
                <div className='btn-check-container'>
                    <CheckCircleIcon
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "30px",
                            cursor: "pointer"
                        }}
                        color="success"
                    />


                    <CancelIcon
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "30px",
                            cursor: "pointer"
                        }}
                        color="error"
                    />

                </div>
            )}
        </ListItem>
    )
}

export default ListItemSolicitudes