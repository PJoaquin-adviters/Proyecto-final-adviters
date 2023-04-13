import LicensesService from '../services/LicensesService';

export const getActiveLicenses = () => LicensesService.getLicenses(`activeNow=true`)

export const getLicensesByState = (state) => LicensesService.getLicenses(`state=${state}`)

export const getLicensesByUser = (userId) => LicensesService.getLicenses(`userId=${userId}`)

export const getLicensesInDateRange = (from, to) => LicensesService.getLicenses(`from=${from}$to=${to}`)

export const newLicense = (data) => {

    const errors = [];
    if (data.name.length > 50) errors.push("El nombre es inválido")
    const getTotalDiasLicencia = (fechaInicio, fechaFin) => {
        const diferenciaDiasMilisegundos = Math.abs(fechaInicio - fechaFin);
        const totalDiasLicencia = Math.ceil(diferenciaDiasMilisegundos / (1000 * 60 * 60 * 24)); 
        return totalDiasLicencia;
    }
    
    //verificaciones fechas
    if (data.startDate > data.endDate) errors.push("La fecha de inicio de licencia debe ser mayor a la de finalización.");
    if (data.startDate < new Date()) errors.push("La fecha de inicio de licencia no puede haber pasado.");
    if(!formatoFechaEsValido(data.startDate) || !formatoFechaEsValido(data.endDate)) errors.push("Debés ingresar las fechas con formato dd/mm/aaaa. Por ejemplo: 01/11/2001");
    
    //verificaciones total de días con licencia
    if( data.totalAvailableDates > getTotalDiasLicencia(data.startDate, data.endDate)) errors.push("La licencia cargada no puede exceder el número de días totales");

    if (errors.length > 0) throw new Error(errors)
    else return LicensesService.newLicense(data)
}