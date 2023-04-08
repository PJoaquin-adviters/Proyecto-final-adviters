import React from 'react'
import "./ListItemCargaLicencia.css"
import { Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';

const ListItemCargaLicencia = ({type, totalDiasDisponibles, startDate, endDate}) => {
    const totalDiasTomados = endDate - startDate;
    const coloresIconoLicencia = {      
        "vacaciones" : "purple", 
        "dias estudio" : "yellow",
        "licencia medica" : "blue"
    }

  return (
    <div id='contenedor-item-cargar-licencia' style={{borderLeftColor: `${coloresIconoLicencia[type]}`}}>
        <span>
            <Typography variant="subtitle2">{type}</Typography>
            <p className='item-cl-texto-secundario'>dias totales: <b>{totalDiasDisponibles}</b></p>
            <p className='item-cl-motivo'> 
            <span className='item-cl-icono' style={{backgroundColor : `${coloresIconoLicencia[type]}`}}></span> 
            {type}
            </p>
        </span>
        <span>
            <p className='item-cl-texto-secundario'>dias tomados: <b>{totalDiasTomados}</b></p>
            <p className='item-cl-fecha'><b>{startDate}</b> - <b>{endDate}</b></p>
        </span>
        <span>
            <CreateIcon></CreateIcon>
        </span>
    </div>
  )
}

export default ListItemCargaLicencia