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

const holidayFakeApi = [
  {
    id: "sdkjfhskdfa",
    name: "año Nuevo",
    date: "2023-01-01",
  },
  {
    id: "sdkjfhskdfa",
    name: "feriado inventado",
    date: "2023-01-02",
  },
  {
    id: "askfjasnfdsdf",
    name: "carnaval",
    date: "2023-02-20",
  },
  {
    id: "askfjasnfdsdf",
    name: "carnaval",
    date: "2023-02-21",
  },
  {
    id: "sdkjfhskdfa",
    name: "Día de la Memoria",
    date: "2023-03-24",
  },
  {
    id: "askfjasnfdsdf",
    name: "Viernes Santo",
    date: "2023-04-07",
  },
  {
    id: "askfjasnfdsdf",
    name: "Día del Trabajador",
    date: "2023-05-01",
  },
  {
    id: "askfjasnfdsdf",
    name: "Día de la Revolución de Mayo",
    date: "2023-05-25",
  },
  {
    id: "askfjasnfdsdf",
    name: "Puente",
    date: "2023-05-26",
  },
  {
    id: "askfjasnfdsdf",
    name: "Puente",
    date: "2023-06-19",
  },
  {
    id: "askfjasnfdsdf",
    name: "Puente",
    date: "2023-06-20",
  },
  {
    id: "askfjasnfdsdf",
    name: "Día de la Independencia",
    date: "2023-07-09",
  },
];

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
      alert("Ocurrió un error");
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
    </>
  );
};

export default CalendarPage;
