import React from 'react'
import "./ListItemCargaLicencia.css"
import { Typography } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';

const ListItemCargaLicencia = () => {
    let licencia = "";


  return (
    <div id='contenedor-item-cargar-licencia'>
        <span>
            <Typography variant="subtitle2">{licencia || "Vacaciones"}</Typography>
            <p className='item-cl-texto-secundario'>dias totales: <b>12</b></p>
            <p className='item-cl-motivo'> <span className='item-cl-icono'></span> Licencia Médica</p>
        </span>
        <span>
            <p className='item-cl-texto-secundario'>dias tomados: <b>1</b></p>
            <p className='item-cl-fecha'><b>12/01</b> - <b>13/01</b></p>
        </span>
        <span>
            <CreateIcon></CreateIcon>
        </span>
    </div>
  )
}

export default ListItemCargaLicencia