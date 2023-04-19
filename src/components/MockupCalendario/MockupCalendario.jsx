import React from "react";
import HolidayCalendar from "../HolidayCalendar/HolidayCalendar";
import { Typography } from "@mui/material";
import "./MockupCalendarioStyles.css";

const MockupCalendario = () => {
  return (
    <div className="mock-calendar-container">
      <HolidayCalendar></HolidayCalendar>
      <div className="mock-calendar-holidayList">
        <Typography variant="h5">Próximos feriados</Typography>
        <p>24 Febrero: carnaval</p>
        <p>25 Febrero: carnaval</p>
      </div>
    </div>
  );
};

export default MockupCalendario;
