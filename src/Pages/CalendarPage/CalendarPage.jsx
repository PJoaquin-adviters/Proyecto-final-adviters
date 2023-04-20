import React, { useContext, useEffect, useState } from "react";
import HolidayCalendar from "../../components/HolidayCalendar/HolidayCalendar";
import Typography from "@mui/material/Typography";
import HolidayList from "../../components/HolidayList/HolidayList";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./CalendarPage.css";
import { Button, TextField } from "@mui/material";
import BasicModal from "../../components/BasicModal/BasicModal";
import Loading from "../../components/Loading/Loading";
import UserDataContext from "../../context/UserDataContext";
import CalendarService from "../../services/CalendarService";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CalendarPage = () => {
  const [holidays, setHolidays] = useState(null);
  const { dataUser, setAppTitle } = useContext(UserDataContext);
  setAppTitle("CALENDARIO")

  useEffect(() => {
    getHolidays();
  }, []);

  const getHolidays = async () => {
    try {
      const { data } = await CalendarService.getHolidays();
      setHolidays(data);
    } catch (e) {
      console.log(e);
      toast.error("¡Lo sentimos, ocurrió un error :(!")
    }
  };

  return (
    <>
      {!holidays ? (
        <Loading />
      ) : (
        <section className="calendar-page">
          <div className="calendar-page-section-container">
            <Typography variant="h3" color="initial">
              Calendario
            </Typography>
            <HolidayCalendar holidays={holidays} />
          </div>
          <div className="calendar-page-section-container list-calendar">
            <div className="calendar-section-title-container">
              <Typography variant="h3" color="initial">
                Feriados
              </Typography>

              {dataUser.idRol == 0 && (
                <>
                  <BasicModal
                    titulo="Crear nuevo Feriado"
                    nombreBtn="Nuevo Feriado"
                  >
                    <>
                      <div className="modal-input-container">
                        <TextField
                          id="date"
                          label="Fecha"
                          defaultValue="2023-02-18"
                          type="date"
                          // value={}
                          // onChange={}
                        />
                        <TextField
                          id="motivo"
                          defaultValue="motivo"
                          label="Motivo"
                          type="text"
                          // value={}
                          // onChange={}
                        />
                      </div>
                      <div className="calendar-modal-btn-container">
                        <Button variant="contained" color="error">
                          Cancelar
                        </Button>
                        <Button variant="contained" color="success">
                          Confirmar
                        </Button>
                      </div>
                    </>
                  </BasicModal>
                </>
              )}
            </div>

            <HolidayList>
              {holidays.map((holiday, index) => (
                <ListItem key={`holiday-${index}`} divider={true}>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="h5"
                          color="text.primary"
                        >
                          {holiday.date} - {holiday.descripcion}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </HolidayList>
          </div>
        </section>
      )}
      <ToastContainer/>
    </>
  );
};

export default CalendarPage;
