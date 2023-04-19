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

//GET LICENSE TYPES
const getLicenceTypes = () => httpRequest.get("/licences/types");

//GET LICENSE TYPES
const updateLicenceState = (licenseId, state) =>
  httpRequest.post(`/licenses/${licenseId}`, { state });

const getLicenceByUser = (userId) =>
  httpRequest.get(`/licencia/user/${userId}/list`);

const getLicencesBySupervisor = (userId) =>
  httpRequest.get(`/licencia/team/${userId}`);

const getPendingLicences = () => httpRequest.get("/list?status=0");

const methods = {
  newLicence,
  getLicences,
  getLicenceTypes,
  updateLicenceState,
  getLicenceByUser,
  getLicencesBySupervisor,
};

export default methods;
