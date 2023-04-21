import httpRequest from "./httpRequest";

//GET HOLIDAYS
const getHolidays = () => httpRequest.get("/feriado/");

//SAVE NEW HOLIDAY
const newHoliday = (date, descripcion) =>
  httpRequest.post("/feriado", { date, descripcion });

//DELETE A HOLIDAY
const deleteHoliday = (holidayId) =>
  httpRequest.delete(`/feriado/${holidayId}`);

const methods = {
  getHolidays,
  newHoliday,
  deleteHoliday,
};

export default methods;
