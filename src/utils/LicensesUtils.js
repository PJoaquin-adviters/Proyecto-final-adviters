import LicensesService from '../services/LicensesService';

export const getActiveLicenses = () => LicensesService.getLicenses(`activeNow=true`)

export const getLicensesByState = (state) => LicensesService.getLicenses(`state=${state}`)

export const getLicensesByUser = (userId) => LicensesService.getLicenses(`userId=${userId}`)

export const getLicensesInDateRange = (from, to) => LicensesService.getLicenses(`from=${from}$to=${to}`)

export const newLicense = (data) => {

    const errors = [];
    const formatoFechaEsValido = (fecha) =>{
        return /^(?:(?:(?:0?[13578]|1[02])(\/)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(fecha);
    }
    const getTotalDiasLicencia = (fechaInicio, fechaFin) => {
        const diferenciaDiasMilisegundos = Math.abs(fechaInicio - fechaFin);
        const totalDiasLicencia = Math.ceil(diferenciaDiasMilisegundos / (1000 * 60 * 60 * 24)); 
        return totalDiasLicencia;
    }
    
    //verifica tipo de licencias
    if(data.licenceType.length === 0) errors.push("Debes ingresar un tipo de licencia.")

    //verificaciones fechas
    if (data.startDate > data.endDate) errors.push("La fecha de inicio de licencia debe ser mayor a la de finalización.");
    if (data.startDate < new Date()) errors.push("La fecha de inicio de licencia no puede haber pasado.");
    if(!formatoFechaEsValido(data.startDate) || !formatoFechaEsValido(data.endDate)) errors.push("Debés ingresar las fechas con formato dd/mm/aaaa. Por ejemplo: 01/11/2001");
    
    //verificaciones total de días con licencia
    if( data.totalAvailableDates > getTotalDiasLicencia(data.startDate, data.endDate)) errors.push("La licencia cargada no puede exceder el número de días totales");

    if (errors.length > 0) throw new Error(errors)
    else return LicensesService.newLicense(data)
}