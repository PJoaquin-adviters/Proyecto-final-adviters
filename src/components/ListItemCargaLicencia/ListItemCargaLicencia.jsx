import React from "react";
import "./ListItemCargaLicencia.css";
import { Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

const ListItemCargaLicencia = ({
  type,
  totalDiasDisponibles,
  startDate,
  endDate,
}) => {
  const totalDiasTomados = endDate - startDate;
  const coloresIconoLicencia = {
    Salud: "purple",
    Estudio: "yellow",
    Vacaciones: "blue",
  };

  const editarLicencia = () => {
    alert("editar licencia");
  };

  return (
    <div
      id="contenedor-item-cargar-licencia"
      style={{ borderLeftColor: `${coloresIconoLicencia[type]}` }}
    >
      <span>
        <Typography variant="subtitle2">{type}</Typography>
        <p className="item-cl-texto-secundario">
          dias totales: <b>{totalDiasDisponibles}</b>
        </p>
        <p className="item-cl-motivo">
          <span
            className="item-cl-icono"
            style={{
              backgroundColor: `${coloresIconoLicencia[type]}`,
              width: "10px",
              height: "10px",
            }}
          ></span>
          {type}
        </p>
      </span>
      <span>
        <p className="item-cl-fecha">
          <b>{startDate}</b> - <b>{endDate}</b>
        </p>
      </span>
      <span>
        <CreateIcon onClick={editarLicencia} id="icono-lapiz"></CreateIcon>
      </span>
    </div>
  );
};

export default ListItemCargaLicencia;
