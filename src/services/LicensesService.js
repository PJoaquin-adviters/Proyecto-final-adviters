import httpRequest from "./httpRequest";

//CREATE NEW LICENSE
export const newLicense = (data) => httpRequest.post('/licenses/new', data)

//GET LICENSES LIST
export const getLicenses = (queryParams) => httpRequest.get(`/licenses?${queryParams}`)

//GET LICENSE TYPES
export const getLicenseTypes = () => httpRequest.get('/licenses/types')

//GET LICENSE TYPES
export const updateLicenseState = (licenseId, state) => httpRequest.post(`/licenses/${licenseId}`, {state})

export default methods = {
    newLicense, getLicenses, getLicenseTypes, updateLicenseState
}