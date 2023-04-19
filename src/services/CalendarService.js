import httpRequest from "./httpRequest";

//GET HOLIDAYS
const getHolidays = () => httpRequest.get("/feriado/");

//SAVE NEW HOLIDAY
const newHoliday = (name, date) =>
  httpRequest.post("/calendar/holidays/new", { name, date });

//DELETE A HOLIDAY
const deleteHoliday = (holidayId) =>
  httpRequest.delete(`/calendar/holidays/${holidayId}`);

const methods = {
  getHolidays,
  newHoliday,
  deleteHoliday,
};

export default methods;
