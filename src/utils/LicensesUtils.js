import LicensesService from '../services/LicensesService';

export const getActiveLicenses = () => LicensesService.getLicenses(`activeNow=true`)

export const getLicensesByState = (state) => LicensesService.getLicenses(`state=${state}`)

export const getLicensesByUser = (userId) => LicensesService.getLicenses(`userId=${userId}`)

export const getLicensesInDateRange = (from, to) => LicensesService.getLicenses(`from=${from}$to=${to}`)

export const newLicense = (data) => {

    const errors = [];
    if (data.name.length > 50) errors.push("El nombre es inválido")

    if (errors.length > 0) throw new Error(errors)
    else return LicensesService.newLicense(data)
}