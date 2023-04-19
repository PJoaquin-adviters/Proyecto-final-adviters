import React from "react";
import { Typography } from "@mui/material";
import "./MockupWeatherStyle.css"

const MockupWeather = () => {
  return (
    <div className="mockWeather-container">
      <div className="mockWeather-clima">
        <img
          src="https://cdn-icons-png.flaticon.com/512/984/984585.png"
          alt="foto clima"
          style={{ width: "100px" }}
        />
        <Typography variant="h3">35°C</Typography>
      </div>
      <div className="mockWeather-clima-detalle">
        <Typography variant="body1">Buenos Aires</Typography>
        <Typography variant="body1">Prob. de precipitaciones: 0%</Typography>
        <Typography variant="body1">Humedad: 28%</Typography>
        <Typography variant="body1">Viento: a 21 km/h</Typography>
      </div>
    </div>
  );
};

export default MockupWeather;
