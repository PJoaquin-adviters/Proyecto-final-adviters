import httpRequest from "./httpRequest";

//GET HOLIDAYS
const getHolidays = () => httpRequest.get('/calendar/holidays')

//SAVE NEW HOLIDAY
const newHoliday = (name, date) => httpRequest.post('/calendar/holidays/new', {name, date})

//DELETE A HOLIDAY
const deleteHoliday = (holidayId) => httpRequest.delete(`/calendar/holidays/${holidayId}`)

export default methods = {
    getHolidays, newHoliday, deleteHoliday
}