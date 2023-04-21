import httpRequest from "./httpRequest";

//CREATE NEW LICENSE
const newLicence = (userId, data) => {
  console.log("la data es ", data);
  const licenceType = data.idLicenceType;

  data.tipoDeLicencia = {
    id: licenceType,
  };
  delete data.idLicenceType;

  return httpRequest.post(`/licencia/user/${userId}`, data);
};

//GET LICENSES LIST
const getLicences = (queryParams) =>
  httpRequest.get(`/licences?${queryParams}`);

const getLicenceByUser = (userId) =>
  httpRequest.get(`/licencia/user/${userId}/list`);

const getLicencesBySupervisor = (userId) =>
  httpRequest.get(`/licencia/team/${userId}`);

const getPendingLicences = () => httpRequest.get("/licencia/list?status=0");

const getApprovedLicences = () => httpRequest.get("/licencia/list?status=1");

const aprobarLicencia = (id) => httpRequest.put(`/licencia/${id}`, {status: 1});

const rechazarLicencia = (id) => httpRequest.put(`/licencia/${id}`, {status: 2});

const methods = {
  newLicence,
  getLicences,
  getLicenceByUser,
  getLicencesBySupervisor,
  getPendingLicences,
  getApprovedLicences,
  aprobarLicencia,
  rechazarLicencia
};

export default methods;
