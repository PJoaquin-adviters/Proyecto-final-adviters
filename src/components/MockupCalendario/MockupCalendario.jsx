import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import CalendarService from "../../services/CalendarService";

const MockupCalendario = () => {
  const [holidays, setHolidays] = useState([]);

  const getHolidays = async () => {
    try {
      const feriadosRecibidos = await CalendarService.getHolidays();

      let mappedFeriados = [];

      feriadosRecibidos.data.map((feriado) => {
        mappedFeriados.push({
          start: feriado.date,
          end: feriado.date,
          display: "background",
          color: "blue",
        });
      });

      console.log(mappedFeriados);
      setHolidays(mappedFeriados);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getHolidays();
  }, []);

  return (
    <div
      id="calendar"
      style={{
        width: "400px",
        overflow: "hidden",
        height: "auto",
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin]}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        initialView="dayGridMonth"
        //que los días sean una letra
        events={holidays}
      />
    </div>
  );
};

export default MockupCalendario;
