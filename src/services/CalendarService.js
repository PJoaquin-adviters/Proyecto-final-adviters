import httpRequest from "./httpRequest";

//GET HOLIDAYS
export const getHolidays = () => httpRequest.get('/calendar/holidays')

//SAVE NEW HOLIDAY
export const newHoliday = (name, date) => httpRequest.post('/calendar/holidays/new', {name, date})