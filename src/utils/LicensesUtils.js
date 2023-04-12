import {getLicenses } from '../services/LicensesService';

export const getActiveLicenses = () => getLicenses(`activeNow=true`)

export const getLicensesByState = (state) => getLicenses(`state=${state}`)

export const getLicensesByUser = (userId) => getLicenses(`userId=${userId}`)

export const getLicensesInDateRange = (from, to) => getLicenses(`from=${from}$to=${to}`)