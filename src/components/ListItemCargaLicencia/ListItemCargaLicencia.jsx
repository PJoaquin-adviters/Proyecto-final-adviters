import React from 'react'
import "./ListItemCargaLicencia.css"
import { Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';

const ListItemCargaLicencia = () => {
    let licencia = "";
    let totalDias = "";
    let motivoLicencia = "licencia medica";
    let totalDiasTomados = 0;
    let fechaInicioLicencia = "";
    let fechaFinLicencia = "";

    const coloresIconoLicencia = {      
        "vacaciones" : "purple", 
        "dias estudio" : "yellow",
        "licencia medica" : "blue"
    }

  return (
    <div id='contenedor-item-cargar-licencia'>
        <span>
            <Typography variant="subtitle2">{licencia || "Vacaciones"}</Typography>
            <p className='item-cl-texto-secundario'>dias totales: <b>{totalDias || 1}</b></p>
            <p className='item-cl-motivo'> 
            <span className='item-cl-icono' style={{backgroundColor : `${coloresIconoLicencia[motivoLicencia]}`}}></span> {motivoLicencia || "Licencia Médica"}
            </p>
        </span>
        <span>
            <p className='item-cl-texto-secundario'>dias tomados: <b>{totalDiasTomados || 1}</b></p>
            <p className='item-cl-fecha'><b>{fechaInicioLicencia || "12/01"}</b> - <b>{fechaFinLicencia || "13/01"}</b></p>
        </span>
        <span>
            <CreateIcon></CreateIcon>
        </span>
    </div>
  )
}

export default ListItemCargaLicencia