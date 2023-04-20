import React from "react";
import HolidayCalendar from "../HolidayCalendar/HolidayCalendar";
import { Typography } from "@mui/material";
import "./MockupCalendarioStyles.css";

const MockupCalendario = () => {
  return (
    <div className="mock-calendar-container">
      <HolidayCalendar></HolidayCalendar>
      
    </div>
  );
};

export default MockupCalendario;
